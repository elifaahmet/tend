/** @format */
import debounce from 'lodash/debounce';
import * as React from 'react';
import { BaseSyntheticEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { useService } from '@tend/frontend/shared/react-utils';
import { SearchUserProps, SearchUserView } from '@tend/lego/product-ui-kit';

export function SendMoneyTo() {
  const {
    2: { queries, mutations },
  } = useService('service_transaction');
  const [mostRecent, setMostRecent] = React.useState([]);
  const [mostFrequentlySent, setMostFrequentlySent] = React.useState([]);
  const [p2pRequest, setP2pRequest] = React.useState([]);
  const [error, setError] = React.useState({
    flag: false,
    code: '0000',
    message: '',
  });

  const { t } = useTranslation(['send-money-to', 'errors']);
  const navigate = useNavigate();

  const onClickCloseErrorModal = () => {
    if (error.code === '4000') {
      window.location.href = '/logout/done';
    } else {
      navigate('/');
    }
  };

  const withDeletePayee = (id) => (cb) => () =>
    mutations.deletePayee({ id }).then(({ data, errors, code }) => {
      if (data.ok) {
        cb();
      }
    });

  const withNavigate = (navigate) => (user) => () =>
    navigate(`/initiate-transfer/${user.tendId ? user.tendId : user.id}`, {
      state: { ...user },
    });

  React.useEffect(() => {
    queries
      .getPayeeList()
      .then(({ data, errors, code }) => {
        if (errors?.length) {
          setError({ flag: true, message: t(`error:${code}`), code });
          throw new Error(t(`errors:${code}`));
        }
        const {
          payeeList: { mostFrequentlySent, mostRecent, p2pRequest },
        } = data;
        setMostRecent(mostRecent);
        setMostFrequentlySent(mostFrequentlySent);
        setP2pRequest(p2pRequest);
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
  const [searchResults, setSearchResults] = React.useState([]);

  const onChangeDebounced = debounce(function (e: BaseSyntheticEvent) {
    e.preventDefault();
    const queryString = e.target.value.toLowerCase().trim();
    queries
      .getPayee({ queryString })
      .then(
        ({
          data: {
            getPayee: { payees },
          },
          errors,
          code,
        }) => {
          if (errors?.length) {
            setError((prevState) => ({ ...prevState, code }));
            throw new Error(t(`error:${code}`));
          }
          if (payees) {
            setSearchResults(
              payees.reduce((allPayees, payee) => {
                if (payee.country) {
                  allPayees.push({ data: { ...payee } });
                }
                return allPayees;
              }, [])
            );
          }
        }
      )
      .catch((error) => {
        setError((prevState) => ({
          ...prevState,
          flag: true,
          message: error.message,
        }));
      });
  }, 1500);

  const onShowAllClick = () => navigate('all-activity');

  const searchUser = {
    onChange: onChangeDebounced,
    searchResults,
    bankText:
      'Banking Services in the United States provided by Community Federal Savings Bank.',
  } as SearchUserProps;
  return (
    <SearchUserView
      searchUser={searchUser}
      mostFrequentlySent={mostFrequentlySent}
      mostRecent={mostRecent}
      p2pRequest={p2pRequest}
      error={error}
      onClickCloseErrorModal={onClickCloseErrorModal}
      onShowAllClick={onShowAllClick}
      withNavigate={withNavigate(navigate)}
      withDeletePayee={withDeletePayee}
    />
  );
}
