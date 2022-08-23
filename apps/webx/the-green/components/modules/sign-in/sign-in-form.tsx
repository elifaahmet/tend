import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { Input, CTALink, Paragraph, DownloadAppButton } from '@tend/ui';
import useUser from '../../../hooks/use-auth';
import usePrefixedWithBasePath from '../../../hooks/usePrefixedWithBasePath';
import Spinner from '../../elements/spinner';
import { STATUS } from '../../../constants/form-status';

interface FlexLayoutProps {
  bg: string[];
}

const FlexLayout = styled.div<FlexLayoutProps>`
  display: flex;
  flex-direction: column;
  min-height: 12rem;
  min-width: 23rem;
  padding-inline: 15%;
  padding-block: 10%;
  ${color}
`;

const Error = styled(Paragraph)`
  display: inline-block;
  margin-block-end: 0.5rem;
`;

const StyledForm = styled.form`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
`;

const StyledField = styled.div`
  margin-block-start: 0.5rem;
  margin-block-end: 0.5rem;
`;

const StyledFormFooter = styled.div`
  width: 8.5rem;
  margin-left: auto;
`;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  padding-block-start: 1rem;
  padding-block-end: 1rem;
  & > * {
    padding-inline-start: 1%;
    padding-inline-end: 1%;
  }
  & > *:first-of-type {
    display: flex;
    justify-content: flex-end;
  }
  & > *:last-of-type {
    display: flex;
    justify-content: flex-start;
  }

`

const AppContainerText = styled.div`
  padding-block-start: 1rem;
  width: 100%;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  line-height: 120%;
`

const StyledCTA = styled(CTALink)`
  i {
    &:last-child {
      padding-left: 0.5rem;
      min-width: 0rem;
    }

    &:hover {
      &:last-child {
        padding-left: 1rem;
        min-width: 0rem;
      }
    }
  }
`;

const Title = styled(Paragraph)`
  margin-block-end: 0.75rem;
`;

const Content = styled(Paragraph)`
  margin-block-end: 0.5rem;
`;

const SignInForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);
  const [errorMessage, setErrorMessage] = useState(null);
  const [requireNickname, setRequireNickname] = useState(false);

  const { mutateUser } = useUser({
    redirectTo: '/',
    redirectIfFound: false,
  });
  const loginUrl = usePrefixedWithBasePath('/api/auth/login');
  const googlePlayImageUrl = usePrefixedWithBasePath(t('images.google-play'));
  const appleAppStoreImageUrl = usePrefixedWithBasePath(t('images.app-store'));

  const handleChange = useCallback((e) => {
    e.persist();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }, [setFormData, formData]);

  const login = useCallback(async (e) => {
    e.preventDefault();
    setStatus(STATUS.SUBMITTING);

    if (Object.values(formData).filter((val) => val).length < 2) {
      setErrorMessage(t('Enter creds'));
      setStatus(STATUS.SUBMITTED);
      return;
    }

    try {
      await mutateUser(
        await fetch(loginUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
          redirect: 'follow',
        })
          .then((res) => res.json())
          .then(({ isLoggedIn, requireNickname, message }) => {
            setRequireNickname(requireNickname);
            setErrorMessage(!isLoggedIn && t(message.charAt(message.length -1) === "." ? message.slice(0, -1) : message));
          })
      );
      setStatus(STATUS.COMPLETED);
    } catch {
      setStatus(STATUS.IDLE);
    } finally {
      setStatus(STATUS.SUBMITTED);
    }
  }, [formData, mutateUser, loginUrl]);

  const onFormSubmitListener = async event => {
    if (event.code === "Enter" || event.code === "NumpadEnter") {
      await login(event);
    }
  };

  const SignInComponent = useMemo(() => {
    return (
      <>
        <StyledField>
          <Input
            borderBottomColor="black"
            rule={true}
            textTransform="none"
            placeholder={t('Username')}
            bg="transparent"
            color="black"
            name="email"
            style={{
              paddingLeft: '3px',
              textTransform: 'uppercase',
            }}
            onChange={handleChange}
          />
        </StyledField>
        <StyledField>
          <Input
            borderBottomColor="black"
            rule={true}
            textTransform="none"
            placeholder={t('Password')}
            bg="transparent"
            color="black"
            name="password"
            type="password"
            style={{
              paddingLeft: '3px',
              textTransform: 'uppercase',
            }}
            onChange={handleChange}
          />
        </StyledField>
        {errorMessage && (
          <Error color="black" fontSize={['0.75rem']}>
            {errorMessage}
          </Error>
        )}
        <StyledFormFooter>
          <StyledCTA disabled={status === STATUS.SUBMITTING} color="black" onClick={login}>
            {t('Sign In')}
            </StyledCTA>
        </StyledFormFooter>
        <AppContainerText>
          {t('New here')}
        </AppContainerText>
        <AppContainer>
            <DownloadAppButton
              imgWidth={["80%", "50%", "50%", "70%"]}
              src={googlePlayImageUrl}
              href="https://play.google.com/store/apps/details?id=money.tend.app"
              fontSize="0.8rem"
              store="google play"
            />
            <DownloadAppButton
              imgWidth={["80%", "50%", "50%", "70%"]}
              src={appleAppStoreImageUrl}
              href="https://apps.apple.com/us/app/tend-money/id1554963043"
              fontSize="0.8rem"
              store="app store"
            />
        </AppContainer>
      </>
    )
  }, [errorMessage, handleChange, login, status]);


  const SetNicknameComponent = useMemo(() => {
    return (
      <>
        <Title bold fontSize={['1.15rem']} color="black" textTransform="uppercase">
          {t('nickname.title')}
        </Title>
        <Content fontSize={['0.80rem']}>
          {t('nickname.content')}
        </Content>
        <StyledField>
          <Input
            borderBottomColor="black"
            rule={true}
            textTransform="none"
            placeholder={t('nickname.input-placeholder')}
            bg="transparent"
            color="black"
            name="nickname"
            style={{
              paddingLeft: '3px',
            }}
            onChange={handleChange}
          />
        </StyledField>
        {errorMessage && (
          <Error color="black" fontSize={['0.75rem']}>
            {errorMessage}
          </Error>
        )}
        <StyledFormFooter>
          <StyledCTA disabled={status === STATUS.SUBMITTING} color="black" onClick={login}>
            {t('nickname.footer')}
          </StyledCTA>
        </StyledFormFooter>
      </>
    )
  }, [errorMessage, handleChange, login, status]);

  return (
    <FlexLayout bg={['neonGreen.0']}>
      {status === STATUS.SUBMITTING ? (
        <Spinner />
      ) :
        <StyledForm onKeyDown={onFormSubmitListener}>
          {requireNickname ? SetNicknameComponent : SignInComponent}
        </StyledForm>
      }
    </FlexLayout>
  );
}

export default SignInForm;
