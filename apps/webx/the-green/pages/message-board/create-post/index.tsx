import React from 'react';
import { Layout } from '@tend/ui';
import MessageBoard from '../../../components/message-board/message-board';
import PostForm from '../../../components/message-board/post-form';
import Page from '../../../components/app/page';

import PayWall from '../../../components/modules/pay-wall';

import { useTranslation } from '@tend/webx/utils/next-i18next';
import { getCategoriesList } from "../../../api/discourse";

const Main = ({ categories }) => {
  const { t } = useTranslation();

  return (
    <Page title={'Message Board - Create New Post'} description={t('message-board.body')}>
      <PayWall />
      <Layout bg="defaultGreen">
        <MessageBoard />
        <PostForm categories={categories} />
      </Layout>
    </Page>
  );
};

export async function getServerSideProps({ locale }) {
  const categories = await getCategoriesList(locale)

  return {
    props: {
      categories
    }
  };
}


export default Main;
