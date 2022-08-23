/**@format */
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { compose } from '@tend/frontend/shared/utils';
import {
  B1,
  H1,
  Layout,
  Modal,
  Spacer,
  Verification,
  sanitizeMoneyInput,
} from '@tend/lego/product-ui-kit';
import { ButtonProduct, Checkbox } from '@tend/shared/design/ui-kit';

import { InitiateTransferComplete } from './components/initiate-transfer-complete';
import { InitiateTransferSendToConfirm } from './components/initiate-transfer-send-to-confirm';
import { InitiateTransferSendToStart } from './components/initiate-transfer-send-to-start';
import {
  CheckBoxWrapper,
  OptionInternationTransferText,
} from './components/initiate-transfer.styled';
import {
  InitiateTransferSteps,
  InitiateTransferViewProps,
  InitiateTransferViewState,
  defaultErrorMessage,
} from './initiate-transfer-view.types';

// TODO: limit height of modal to match conversion rate text on view :(

export const InitiateTransferView: React.FC<InitiateTransferViewProps> = (
  props
) => {
  const [state, setState] = useState<InitiateTransferViewState>({
    sendAmount: '',
    receivedAmount: '',
    note: '',
    attemptedNext: !!props.errorMessage,
    error: !!props.errorMessage,
    errorMessage: (props.errorMessage || '').trim() || defaultErrorMessage,
  });
  const [step, setStep] = useState<InitiateTransferSteps>('start');
  const [isFraudDisclaimerChecked, setIsFraudDisclaimerChecked] = useState(
    true
  );
  const [isTCChecked, setIsTCChecked] = useState(false);
  const { t } = useTranslation(['initiate-transfer', 'errors']);

  const {
    sendToUser,
    transferType,
    accountInfo,
    rateInfo,
    onSendAmountChange,
    onReceivedAmountChange,
    resendCode,
    withCaptureSingleDigitInputValue,
    onDoneClick,
    onConfirmClick,
    onClickCloseErrorModal,
    error: errorProp,
    showModalTC,
    onClickAgreeModalTC,
    onCancel,
  } = props;

  const sanitizeAndParse = compose(parseFloat, sanitizeMoneyInput);

  useEffect(() => {
    const sendAmountNum = sanitizeAndParse(state.sendAmount);

    if (typeof sendAmountNum !== 'number') return;

    setState((prevState) => ({
      ...prevState,
      error: sendAmountNum > accountInfo.balance,
      errorMessage: defaultErrorMessage,
    }));
  }, [state.sendAmount, accountInfo.balance]);

  const initiateTransferSendToProps = {
    sendToUser,
    transferType,
    accountInfo,
    state,
    setState,
    rateInfo,
    onSendAmountChange,
    onReceivedAmountChange,
  };

  const now = new Date();

  const initiateTransferCompleteProps = {
    sendToUser,
    amountSent: state.sendAmount,
    amountReceived: state.receivedAmount,
    referenceNumber: 12345678910,
    transactionDate: now.toLocaleString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    }),
    transferType,
    onDoneClick,
  };

  const transferWithinUS = transferType === 'us-to-us';
  const validMoneyInputs =
    (transferWithinUS && !state.error && !!state.sendAmount) ||
    (!transferWithinUS &&
      !state.error &&
      !!state.sendAmount &&
      !!state.receivedAmount);

  const onNextClick = () => {
    setState((prevState) => ({
      ...prevState,
      attemptedNext: true,
    }));

    if (validMoneyInputs && step === 'start') {
      setStep('confirm');
    } else if (step === 'confirm') {
      const sanitizeParseAndFix = compose(
        (money) => money.toFixed(2),
        sanitizeAndParse
      );
      onConfirmClick(sanitizeParseAndFix(state.sendAmount), state.note);
      setStep('verify');
    } else if (step === 'verify') {
      setStep('complete');
    }
  };

  return (
    <Layout>
      {step === 'verify' && (
        <Verification
          phoneNumberLastFour={accountInfo.phoneNumberLastFour}
          resendCode={resendCode}
          captureSingleDigitInputValue={withCaptureSingleDigitInputValue(
            onNextClick
          )}
        />
      )}
      {(step === 'start' || step === 'confirm') && (
        <>
          <Spacer top={20}>
            {step === 'start' && (
              <InitiateTransferSendToStart
                {...initiateTransferSendToProps}
                onClickCloseErrorModal={onClickCloseErrorModal}
              />
            )}
            {step === 'confirm' && (
              <InitiateTransferSendToConfirm
                {...initiateTransferSendToProps}
                onClickCloseErrorModal={onClickCloseErrorModal}
              />
            )}
          </Spacer>
          {step === 'confirm' ? (
            <Spacer top={20} bottom={20}>
              <CheckBoxWrapper>
                <Checkbox
                  defaultChecked={true}
                  onChange={() =>
                    setIsFraudDisclaimerChecked(!isFraudDisclaimerChecked)
                  }
                />
                <B1>
                  By continuing with this transaction you agree to our{' '}
                  <a href="#">E-Sign Agreement</a>,{' '}
                  <a href="#">Terms and Conditions</a>, and{' '}
                  <a href="#">Privacy Policy</a>
                </B1>
              </CheckBoxWrapper>
            </Spacer>
          ) : (
            <Spacer top={20} bottom={20} />
          )}
          <ButtonProduct
            onClick={() => onNextClick()}
            disabled={
              state.error ||
              !validMoneyInputs ||
              (step === 'confirm' && !isFraudDisclaimerChecked)
            }
          >
            {step === 'confirm' ? 'CONFIRM AND VERIFY' : 'NEXT'}
          </ButtonProduct>
          <Spacer top={16}>
            <ButtonProduct variant="secondary" onClick={onCancel}>
              CANCEL
            </ButtonProduct>
          </Spacer>
        </>
      )}
      {step === 'complete' && (
        <InitiateTransferComplete {...initiateTransferCompleteProps} />
      )}

      <Modal
        show={errorProp.flag}
        title={'Error'}
        onClose={onClickCloseErrorModal}
        key={Boolean(errorProp.flag).toString()}
      >
        <OptionInternationTransferText>
          <B1>{errorProp.message}</B1>
        </OptionInternationTransferText>
      </Modal>

      <Modal
        show={showModalTC}
        onClose={onClickCloseErrorModal}
        key={`${Boolean(showModalTC).toString()}-right-quick`}
      >
        <H1>Right</H1>
        <H1>Quick</H1>
        <Spacer top={16}>
          <B1>{t('initiate-transfer:acceptTCSummary')}</B1>
        </Spacer>
        <Spacer top={16}>
          <CheckBoxWrapper>
            <Checkbox
              defaultChecked={false}
              onChange={() => setIsTCChecked(!isTCChecked)}
            />
            <B1>
              By continuing with this transaction you agree to our{' '}
              <a href="#">E-Sign Agreement</a>,{' '}
              <a href="#">Terms and Conditions</a>, and{' '}
              <a href="#">Privacy Policy</a>
            </B1>
          </CheckBoxWrapper>
        </Spacer>
        <Spacer top={16}>
          <ButtonProduct
            onClick={() => onClickAgreeModalTC(isTCChecked)}
            disabled={!isTCChecked}
          >
            {t('initiate-transfer:acceptTCSummaryButton')}
          </ButtonProduct>
        </Spacer>
      </Modal>
    </Layout>
  );
};

export default InitiateTransferView;
