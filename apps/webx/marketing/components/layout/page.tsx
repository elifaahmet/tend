/** @format */

import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Layout } from '@tend/ui';
import Header from '../../components/header';
import Footer from './footer';
import { useRouter } from 'next/router';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
`;

interface PageProps {
  children?: React.ReactNode | React.ReactNodeArray;
  title: string;
  description: string;
}

const Page = ({ title, description, children }: PageProps) => {
  const { locale } = useRouter();
  const isLocaleMX = locale.slice(-2) === 'MX';
  const CONTAINER_ID = isLocaleMX
    ? process.env.NEXT_PUBLIC_MX_GTM_CONTAINER_ID
    : process.env.NEXT_PUBLIC_US_GTM_CONTAINER_ID;
  return (
    <StyledPage>
      <Head>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="HandheldFriendly" content="true" />

        <link rel="shortcut icon" href="/favicon-100x100.png" />

        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','${CONTAINER_ID}');`,
          }}
        />
      </Head>

      <Layout bg="white">
        <Header />
      </Layout>

      {children}

      <Footer />
    </StyledPage>
  );
};

export default Page;
