/** @format **/
import * as React from 'react';

import { useService } from './graphql/withGraphQL';

export const withCurrentUser = (Component: React.FC) => (props) => {
  const [currentUser, setCurrentUser] = React.useState({});
  const [country, setCountry] = React.useState('US');
  const {
    2: { queries },
  } = useService('service_auth');

  React.useEffect(() => {
    // eslint-disable-next-line functional/no-let
    let subs = true;
    queries
      .me()
      .then(({ data }) => {
        const { me } = data;
        if (subs) {
          setCurrentUser(me);
          if (me.bank.shortName.match(/^MEX\d{3}/)) {
            setCountry('MX');
          } else {
            setCountry('US');
          }
        }
      })
      .catch((err) => {
        subs = false;
      });

    return () => {
      subs = false;
    };
  }, []);

  return <Component {...props} currentUser={currentUser} country={country} />;
};
