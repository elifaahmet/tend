import React from 'react';
import { Button, PopoverWrapper, Popover } from '@tend/ui';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import SignInForm from './sign-in-form';
import useBodyScrollLock from '../../../hooks/useBodyScrollLock';

const BodyScrollLock = () => {
  useBodyScrollLock(836);
  return <i />;
};

const SignIn = () => {
  const {t} = useTranslation();

  return (
    <PopoverWrapper>
      <Popover
        single
        bg={['neonGreen.0']}
        noPaddingDesktop={true}
        extraTopSpace={12}
        borderBottomColor={['neonGreen.0']}
        scrollLock={<BodyScrollLock />}
        position="bottom"
        trigger={
          <Button
            variant="small"
            id="sign-in-button-header"
            textTransform="uppercase"
            bg="black"
            color="white"
            hoverBorder
            hoverBg="white"
            hoverColor="black"
          >
            {t('Sign In')}
          </Button>
        }
      >
        <SignInForm />
      </Popover>
    </PopoverWrapper>
  );
};

export default SignIn;
