/** @format */

import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

const TWITTER_PIXEL_ID = 'o6q70';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    const { locale } = this.props;
    const isLocaleMX = !!locale.match(/mx/i);

    const CONTAINER_ID = isLocaleMX
      ? process.env.NEXT_PUBLIC_MX_GTM_CONTAINER_ID
      : process.env.NEXT_PUBLIC_US_GTM_CONTAINER_ID;
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${CONTAINER_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <script
            dangerouslySetInnerHTML={{
              __html: `!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
        },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq('init','${TWITTER_PIXEL_ID}');
          twq('track','PageView');`,
            }}
          />
        </body>
      </Html>
    );
  }
}
