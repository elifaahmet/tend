import React, {useEffect} from 'react';
import Head from 'next/head';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';

interface PageProps {
  children?: React.ReactNode | React.ReactNodeArray;
  title?: string;
  description?: string;
  image?: string;
  host?: string;
  fb_app_id?: string;
}

const Page = ({ title, description, image, children, host, fb_app_id }: PageProps) => {
  const {t} = useTranslation();
  const router = useRouter();
  const { locale } = router;
  /**
   * @tech-debt
   *
   * needs to be added as env variables
   */
  const hardcodedHost = 'tend.money';


  /**
     useEffect(() => {
      if (locale === 'es-MX') {
        router.push('/proximamente');
      }
    }, [locale]);
   */

  const loadFbLoginApi = () => {
    if (typeof window !== 'undefined' && !Object.hasOwnProperty.bind(window, 'FB')()) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore

      window.fbAsyncInit = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.FB.init({
          appId      : fb_app_id,
          autoLogAppEvents : true,
          xfbml            : true,
          version          : 'v11.0',
          display          : 'popup'
        });
      };

      // Load the SDK asynchronously
      const loadSdk = (d, s, id) => {
        let js = d.getElementsByTagName(s)[0];
        const fjs = d.body.childNodes[0]
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        js.crossOrigin="anonymous";
        js.async=true;
        js.defer=true;
        fjs.parentNode.insertBefore(js, fjs);
      };
      loadSdk(document, 'script', 'facebook-jssdk');
    }
  }

  useEffect(() => {
    loadFbLoginApi();
  });


  return (
    <>
      <Head>
        <title>{t('meta.defaultTitle')}{title && ` - ${title}`}</title>
        <meta name="description" content={description || t('meta.defaultDescription')} />
        <meta property="og:url"          content={`https://${(host ? host : hardcodedHost)}${router.basePath}/${locale}${router.asPath}`} />
        <meta property="og:type"         content="website" />
        <meta property="og:title"        content={title} />
        <meta property="og:description"  content={description} />
        <meta property="og:image"        content={'https://' + (host ? host : hardcodedHost) + router.basePath + image} />
        <meta property="fb:app_id"       content={fb_app_id} />
        <link rel="shortcut icon" href="/the-green/favicon-100x100.png" />
      </Head>
      {children}
    </>
  );
};

export default Page;
