/** @format */

import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Layout, Grid, Row, Col, Footer } from '@tend/ui';
import Header from '../components/header';

const StyledPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
`;

interface LayoutProps {
  children?: React.ReactNode | React.ReactNodeArray;
  title: string;
  description: string;
}

const PageLayout = ({ title, description, children }: LayoutProps) => {
  return (
    <StyledPageLayout>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link rel="shortcut icon" href="/favicon-100x100.png" />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N4Z5Y4NGJC"
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-N4Z5Y4NGJC');
          `,
          }}
        ></script>

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','GTM-T5PRCNL');`,
          }}
        ></script>
      </Head>

      <Layout bg="white">
        <Header />
      </Layout>

      {children}

      <Layout bg="defaultGreen">
        <Grid bg="defaultGreen">
          <Row paddingBottom="5em" paddingTop="5em">
            <Col xs={4} sm={8} md={8} lg={12}>
              <Footer
                bg="defaultGreen"
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
                  email: 'hey@tend.money',
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
            </Col>
          </Row>
        </Grid>
      </Layout>
    </StyledPageLayout>
  );
};

export default PageLayout;
