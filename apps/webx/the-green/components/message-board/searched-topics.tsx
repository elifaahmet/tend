import React from 'react';
import styled from 'styled-components';

import Grid from '../layout/grid';

import { H6, Paragraph } from '@tend/ui';

import PostTableRow from '../modules/post-table-row';
import { useTranslation } from '@tend/webx/utils/next-i18next';

const Layout = styled(Grid)`
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
      "DIV DIV DIV DIV DIV DIV"
      "TT  TT  TT  TT  .  ."
      "NT  NT  NT  NT  .  .";


  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
      "DIV DIV DIV DIV DIV DIV DIV DIV DIV DIV DIV DIV"
      "TT  TT  TT  TT  TT  TT  TT  TT  TT  TT  .  ."
      "NT  NT  NT  NT  NT  NT  NT  NT  NT  NT  .  .";
  }
`;

const TopicTitle = styled(Grid)`
  grid-area: TT;
`;

const NoTopics = styled(Grid)`
  grid-area: NT;
`;


export const SearchedTopics = ({ data, term }) => {
  const { topics, categories } = data;
  const { t } = useTranslation();
  return (
    <>
      <Layout>
        <TopicTitle>
          <H6 color="white">{t('Search results')}: {`'${term}'`}</H6>
        </TopicTitle>
        <NoTopics>
          {!topics && (
            <Paragraph color="white">{t('No results')}: {`'${term}'`}</Paragraph>
          )}
        </NoTopics>
      </Layout>


      {topics && topics.map((topic, i) => {

        const category = categories.filter((category) => {
          return category.id === topic.category_id
        });

        return (
          <PostTableRow topic={topic} category={category[0]} key={i} />
        )

      })}
    </>
  )
}




export default SearchedTopics;
