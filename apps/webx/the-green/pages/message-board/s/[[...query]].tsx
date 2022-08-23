import React, {useEffect, useRef, useState} from 'react';
import withSession from '../../../hooks/with-session';
import {useRouter} from "next/router";

import {Layout, Paragraph} from '@tend/ui';

import Page from '../../../components/app/page';
import SearchedTopics from '../../../components/message-board/searched-topics';
import MessageBoard from "../../../components/message-board/message-board";
import SearchBar from "../../../components/message-board/search-bar";
import Categories from "../../../components/message-board/categories";
import useAuth from "../../../hooks/use-auth";
import usePrefixedWithBasePath from '../../../hooks/usePrefixedWithBasePath';
import Spinner from '../../../components/elements/spinner';
import styled from "styled-components";
import {getCategoriesList, getCategoryByID } from "../../../api/discourse";




const fetchSearchResults = async (getSearchResultsApiLink, username) => {
    try {
      const response = await fetch(getSearchResultsApiLink, {
        method: 'GET',
        headers: {
          'Api-Username': username,
        },
      });
      const data = await response.json();
      return data;
    }
    catch(err) {
      return {error: err};
    }
}

const Result = styled.div`
  margin-block-end: 2rem;
`;

export const Search = ({ term, categories, category }) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const { locale } = useRouter();
  const { user } = useAuth();
  const username = user?.username ? user.username : 'System';
  const searchBarRef = useRef(null);

  const getSearchResultsApiLink = usePrefixedWithBasePath(`/api/discourse/search?q=${term}&locale=${locale}`);
  useEffect(() => {
    setData(null);
    setError('');
    async function searchFor() {
      const res = await fetchSearchResults(getSearchResultsApiLink, username);
      if(res.error) {
        setError(res.error);
        return;
      }
      const { topics } = res;
      setData({
        topics,
        categories,
      });
      if(searchBarRef.current) searchBarRef.current.scrollIntoView();

    }

    searchFor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [term]);

  return (
    <Page title={`Message Board - Search Results`} description={`Search Results for '${term}'`}>
      <Layout bg="defaultGreen">
        <MessageBoard />
        <Categories data={categories} current={category} />
        <div ref={searchBarRef}>
          <SearchBar />
        </div>
        <Result>
          {data && <SearchedTopics data={data} term={term} />}
          {!data && !error && <Spinner /> }
          {!data && error && <Paragraph color="defaultRed">{error}</Paragraph>}
        </Result>
      </Layout>
    </Page>
  )
}

export default Search;


export const getServerSideProps = withSession(async function ({ req, locale, query, params }) {
  const user = req.session.get('user');

  const username = user?.username ?  user.username : 'System';
  const { term } = query;

  let category = params;
  if(params.category) {
    category = await getCategoryByID( { id: params.category[1] }, locale, username);
  }
  const categories = await getCategoriesList(locale, username);

  return {
    props: {
      term,
      category,
      categories,
    }
  }
});
