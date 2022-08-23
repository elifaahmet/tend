import { useEffect } from 'react';
// import Router from 'next/router';
import usePrefixedWithBasePath from './usePrefixedWithBasePath';
import useSWR from 'swr';

export interface User {
  username: string;
  isLoggedIn: boolean;
}

export default function useAuth({ redirectTo = '', redirectIfFound = false } = {}): {
  user: User;
  mutateUser: (unknown) => Promise<void>;
} {
  const userAuthUrl = usePrefixedWithBasePath('/api/auth/user');
  const { data: user, mutate: mutateUser } = useSWR(userAuthUrl);

  useEffect(() => {
    if (!redirectTo || !user) return;

    if ((redirectTo && !redirectIfFound && !user?.isLoggedIn) || (redirectIfFound && user?.isLoggedIn)) {
      // Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
}
