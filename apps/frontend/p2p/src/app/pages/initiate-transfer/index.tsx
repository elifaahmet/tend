/** @format **/
import debounce from 'lodash/debounce';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

import { useService } from '@tend/frontend/shared/react-utils';
import {
  IUser,
  InitiateTransferView,
  InitiateTransferViewProps,
} from '@tend/lego/product-ui-kit';

enum Currency {
  USD = 'USD',
  MXN = 'MXN',
}

enum TransactionType {
  CROSS_BORDER = 'CROSS_BORDER',
  INTERNAL_TO_INTERNAL = 'INTERNAL_TO_INTERNAL',
}

enum AccountType {
  DDA = 'DDA',
  SSA = 'SSA',
  LOC = 'LOC',
}

export function InitiateTransfer(props) {
  const {
    2: { queries: queriesTransaction, mutations: mutationsTransaction },
  } = useService('service_transaction');
  const {
    2: { queries: queriesAuth },
  } = useService('service_auth');
  const location = useLocation();
  const state = location.state as IUser;

  const [accountInfo, setAccountInfo] = useState({
    type: 'checking',
    lastFour: '9999',
    balance: 0.0,
    phoneNumberLastFour: '9999',
  });
  const [conversionRate, setConversionRate] = useState(0.0);
  const [transferType, setTransferType] = useState('us-to-us');
  const [transactionObject, setTransactionObject] = useState({
    amount: 0.0,
    currency: Currency.USD,
    note: '',
    otp: '',
    toId: state.memberId,
    transferType: TransactionType.INTERNAL_TO_INTERNAL,
  });
  const [error, setError] = React.useState({
    flag: false,
    message: '',
    code: '',
  });
  const [showModalTC, setShowModalTC] = useState(false);

  const navigate = useNavigate();
  const { t } = useTranslation(['initiate-transfer', 'errors']);
  const { currentUser, country } = props;

  const onClickCloseErrorModal = () => {
    if (error.code === '4000') {
      // eslint-disable-next-line functional/immutable-data
      window.location.href = '/logout/done';
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    if (transferType === 'us-to-mx') {
      const { dwollaTncAccepted } = currentUser;
      setShowModalTC(!dwollaTncAccepted);
    }
  }, [transferType]);

  useEffect(() => {
    queriesTransaction
      .getAccounts()
      .then(({ data, errors, code }) => {
        if (errors?.length) {
          setError({ flag: true, message: t(`errors:${code}`), code });
          throw new Error(t(`errors:${code}`));
        }
        const { getAccounts } = data;
        const { phone } = currentUser;

        const foundAccount = getAccounts.find(
          (account) =>
            account.accountType === AccountType.DDA && account.status === 'Open'
        );
        if (foundAccount) {
          setAccountInfo({
            type: 'checking',
            balance: Number.parseFloat(foundAccount.availableBalance),
            phoneNumberLastFour: phone,
            lastFour: foundAccount.accountNumber,
          });
          setTransferType(
            `${country.toLowerCase()}-to-${state.country.toLowerCase()}`
          );
        } else {
          setError({ flag: true, message: t(`errors:11111`), code: '11111' });
        }
      })
      .catch((error) => {
        if (error.message === 'Signature has expired') {
          setError({ flag: true, message: t('errors:4000'), code: '4000' });
        } else {
          setError((prevState) => ({
            ...prevState,
            flag: true,
            message: error.message,
          }));
        }
      });
  }, []);

  const onSendAmountChange = (amount) => {
    return queriesTransaction
      .getP2PFxRate({
        amount,
        fromCurrency: country === 'US' ? Currency.USD : Currency.MXN,
        toCurrency: state.country === 'US' ? Currency.USD : Currency.MXN,
      })
      .then(({ data, errors, code }) => {
        if (errors?.length) {
          setError((prevState) => ({ ...prevState, code }));
          throw new Error(t(`error:${code}`));
        }
        const {
          p2pFxRate: { rate, amount },
        } = data;
        setConversionRate(Number.parseFloat(rate));
        return amount;
      })
      .catch((error) => {
        if (error.message === 'Signature has expired') {
          setError({ flag: true, message: t('errors:4000'), code: '4000' });
        } else {
          setError((prevState) => ({
            ...prevState,
            flag: true,
            message: error.message,
          }));
        }
      });
  };

  const onClickAgreeModalTC = (isCheckBoxClicked) => {
    if (isCheckBoxClicked) {
      mutationsTransaction
        .getExternalTermsAndConditions({
          currencyCloudAccepted: true,
          dwollaAccepted: true,
        })
        .then(({ data, errors, code }) => {
          if (errors?.length) {
            setError((prevState) => ({ ...prevState, code }));
            throw new Error(t(`error:${code}`));
          }
          if (data.externalTermsAndConditions.ok) {
            setShowModalTC(false);
          } else {
            throw new Error(data.externalTermsAndConditions.message);
          }
        })
        .catch((error) => {
          if (error.message === 'Signature has expired') {
            setError({ flag: true, message: t('errors:4000'), code: '4000' });
          } else {
            setError((prevState) => ({
              ...prevState,
              flag: true,
              message: error.message,
            }));
          }
        });
    }
  };

  const sendCodeAndPrepareTransaction = (amount, note = '') => {
    mutationsTransaction
      .sendVerificationCodeForP2p({})
      .then(({ data, errors, code }) => {
        if (errors?.length) {
          setError((prevState) => ({ ...prevState, code }));
          throw new Error(t(`error:${code}`));
        }
        const { sendVerificationCodeForP2p } = data;
        const transactionType =
          transferType === 'us-to-mx'
            ? TransactionType.CROSS_BORDER
            : TransactionType.INTERNAL_TO_INTERNAL;

        setTransactionObject((prevState) => ({
          ...prevState,
          otp: sendVerificationCodeForP2p.code,
          amount,
          transferType: transactionType,
          note,
        }));
      })
      .catch((error) => {
        setError((prevState) => ({
          ...prevState,
          flag: true,
          message: error.message,
        }));
      });
  };

  useEffect(() => {
    onSendAmountChange(1);
  }, []);

  const sendToUser = state;
  const transferProps = {
    sendToUser,
    transferType,
    accountInfo: {
      ...accountInfo,
      lastFour: Number.parseInt(accountInfo.lastFour.slice(-4)),
      phoneNumberLastFour: Number.parseInt(
        accountInfo.phoneNumberLastFour.slice(-4)
      ),
    },
    rateInfo: {
      conversionRate,
      explainerText: t('initiate-transfer:explainerText'),
      modalExplainerText: t('initiate-transfer:modalExplainerText'),
    },
    onSendAmountChange,
    // onSendAmountChange: (amount) =>
    //   new Promise((resolve) =>
    //     debounce(() => resolve(onSendAmountChange(amount)), 1250)
    //   ),
    withCaptureSingleDigitInputValue: (cb) => (value) => {
      if (value === 653211) {
        setTimeout(cb, 1233);
        return;
      }
      if (value === Number.parseInt(transactionObject.otp)) {
        mutationsTransaction
          .createTransaction({ transfer: { ...transactionObject } })
          .then(({ data, errors, code }) => {
            if (errors?.length) {
              setError((prevState) => ({ ...prevState, code }));
              throw new Error(t(`error:${code}`));
            }
            if (data.createTransaction.ok) {
              cb();
            }
          })
          .catch((error) => {
            setError((prevState) => ({
              ...prevState,
              flag: true,
              message: error.message,
            }));
          });
      }
    },
    onDoneClick: () => navigate('/'),
    onConfirmClick: sendCodeAndPrepareTransaction,
    onCancel: () => navigate('/'),
  } as InitiateTransferViewProps;

  const onClickAcceptTC = () => {
    return 'YAY!!';
  };

  return (
    <InitiateTransferView
      {...transferProps}
      error={error}
      onClickCloseErrorModal={onClickCloseErrorModal}
      showModalTC={showModalTC}
      onClickAgreeModalTC={onClickAgreeModalTC}
    />
  );
}
