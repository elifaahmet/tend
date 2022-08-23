import React from 'react';
import { Footer, FooterProps } from './footer';

export default {
  component: Footer,
  title: 'Footer',
};

export const primary = () => {
  /* eslint-disable-next-line */

  return (
    <Footer
      bg="green.0"
      downloadAppLinks={{
        appleUrl: '#downloadApple',
        googlePlayUrl: '#downloadGooglePlay',
      }}
      socialMedia={{
        facebookUrl: 'https://www.facebook.com/tendmoney/',
        twitterUrl: 'https://twitter.com/tendmoney',
        instagramUrl: 'https://www.instagram.com/tendmoney/',
      }}
      translationConfig={{
        accessibility: 'ACCESSIBILITY',
        contactTitle: 'CONTACT',
        privacy: 'PRIVACY',
        terms: 'TERMS',
      }}
      contact={{
        email: 'support@tend.money',
        phone: '1–800–TEND (698–4637)',
        workWeekDays: 'Monday–Friday: 7am–10pm EST',
        workWeekend: 'Saturday–Sunday: 7am–3pm EST',
      }}
      links={[
        { href: '#bank', text: 'BANK' },
        { href: '#earn', text: 'EARN' },
        { href: '#tend-shares', text: 'TEND SHARES' },
        { href: '#cover', text: 'COVER' },
        { href: '#the-green', text: 'THE GREEN' },
        { href: '#about-us', text: 'ABOUT US' },
        { href: '#support', text: 'SUPPORT' },
      ]}
    />
  );
};
