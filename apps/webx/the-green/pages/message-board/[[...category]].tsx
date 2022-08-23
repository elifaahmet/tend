import React from 'react';
import withSession from '../../hooks/with-session';
import { Layout } from '@tend/ui';
import MessageBoard from '../../components/message-board/message-board';
import SearchBar from '../../components/message-board/search-bar';
import Categories from '../../components/message-board/categories';

import Topics from '../../components/message-board/topics';

import Page from '../../components/app/page';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import {
  getCategoriesList,
  getCategoryByID, getCategoryLatestTopicsOrderByCreatedDate,
   getLatestTopicsOrderByCreatedDate,
} from "../../api/discourse";

const Main = ({ categories, category, topics }) => {
  if (!('category_list' in topics)) {
    topics['category_list'] = categories.category_list;
  }
  const categoryName = category?.category ? ` - ${category.category.name}` : ''
  const {t} = useTranslation();
  return (
    <Page title={`Message Board${categoryName}`} description={t('message-board.body')}>
      <Layout bg="defaultGreen">
        <MessageBoard />
        <Categories data={categories} current={category} />
        <SearchBar />
        <Topics data={{ topics, categories }} current={category} />
      </Layout>
    </Page>
  );
};

export default Main;


export const getServerSideProps = withSession(async function ({ req, params, locale }) {
  const user = req.session.get('user');

  const username = user?.username || 'system';
  const categories = await getCategoriesList(locale, username);
  let topics = [];
  let category = params;
  if(params.category) {
    topics = await getCategoryLatestTopicsOrderByCreatedDate(
      {
        slug: params.category[0],
        id: parseInt(params.category[1]),
        username,
      }, locale);
    category = await getCategoryByID( { id: params.category[1] }, locale, username);
  } else {
    topics = await getLatestTopicsOrderByCreatedDate(locale, username);
  }

  return {
    props: {
      categories,
      category,
      topics,
    },
  };
});
