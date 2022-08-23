import React from 'react';
import { Button } from '@tend/ui';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import useAuth from '../../hooks/use-auth';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';

const LogOut = () => {
  const { mutateUser } = useAuth();
  const {t} = useTranslation();
  const logoutUrl = usePrefixedWithBasePath('/api/auth/logout');

  const logout = async () => {
    await mutateUser(
      fetch(logoutUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
      })
    );
  };

  return (
    <Button
      variant="tiny"
      textTransform="uppercase"
      bg="black"
      color="white"
      hoverBorder
      hoverBg="white"
      hoverColor="black"
      onClick={logout}
    >
      {t('Log out')}
    </Button>
  );
};

export default LogOut;
