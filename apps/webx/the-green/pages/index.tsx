import React, { useEffect } from 'react';
import path from "path";
import fs from "fs";
import { Layout } from '@tend/ui';

import WelcomeBoard from '../components/home/welcome-board';
import Equation from '../components/modules/equation';
import MessageBoard from '../components/home/message-board';
import SocialMedia from '../components/home/social-media';
import CommunitySummary from '../components/home/community-summary';
import CommunityContact from '../components/home/community-contact';
import Posts from '../components/home/posts';
import Page from '../components/app/page';
import { useRouter } from 'next/router';

import { useTranslation } from "@tend/webx/utils/next-i18next";
import { serverSideTranslationsHOF } from "../utils/serverSideTranslationsHOF";
import { getCategoriesList, getTopTopics } from "../api/discourse";

const Main = ({ categories, topics, allArticles }) => {

  const { t } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  useEffect(() => {
    if(locale === "es-US") {
      router.push(
        '/',
        '/',
        {
          locale: 'en-US'
        }
      )
    } else if(locale !== "en-US" && locale !== "es-MX" ) {
      router.push(
        '/proximamente',
        '/proximamente'
      )
    }
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  }, []);

  return (
    <Page description={t('Description')}>
      <Layout bg="defaultGreen">
        <WelcomeBoard />
        <Posts allArticles={allArticles}/>
        <CommunitySummary categories={categories} />
        <SocialMedia />
        <MessageBoard topics={topics || []} />
        <CommunityContact />
        <Equation />
      </Layout>
    </Page>
  );
};

export default Main;


export async function getServerSideProps({ locale }) {
  const categories = await getCategoriesList(locale);
  const topics = await getTopTopics(locale);

  const cwd = process.cwd();
  const basePath = cwd.endsWith('tend') ? 'apps/webx/the-green' : '';
  const articlePath = path.join(cwd, basePath, `data/articles/${locale}`);

  let allArticles;

  try {
    allArticles = JSON.parse(fs.readFileSync(articlePath + '/all-articles.json', 'utf8'));
  } catch (e) {
    allArticles = undefined;
  }

  return {
    props: {
      topics,
      categories,
      allArticles,
      href: "/",
      ...(await serverSideTranslationsHOF(locale, ['welcome-board', 'around-the-corner'])),
    },
  };
}
