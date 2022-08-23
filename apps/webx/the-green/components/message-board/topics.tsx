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
      "TT  TT  TT  TT  RE  VIEWS";


  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
      "DIV DIV DIV DIV DIV DIV DIV DIV DIV DIV DIV DIV"
      "TT  TT  TT  TT  TT  TT  TT  TT  TT  TT  RE  VIEWS";
  }
`;

const TopicTitle = styled(Grid)`
  grid-area: TT;
`;

const Replies = styled.div`
  grid-area: RE;
  text-align: right;
`;

const Views = styled.div`
  grid-area: VIEWS;
  text-align: right;
`;

export const Topics = ({ data, current }) => {
  const categories = data?.categories || [];
  const { t } = useTranslation();
  let topics = data.topics || [];
  const { category } = current;
  topics = topics.filter(topic => topic.visible);

  return (
    <>
      <Layout>
        <TopicTitle>

          {category ? (
            <H6 color="white">{t("Latest Posts in")} {category.name}</H6>
          ):(
            <H6 color="white">{t("Latest Post")}</H6>
          )}

        </TopicTitle>

        <Replies>
          <Paragraph color="white" bold textTransform="uppercase">{t("Replies")}</Paragraph>
        </Replies>

        <Views>
          <Paragraph color="white" bold textTransform="uppercase">{t("Views")}</Paragraph>
        </Views>
      </Layout>

      {topics.map((topic, i) => {

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

Topics.defaultProps = {
  current: {
    category: {
      id: 0
    }
  }
}


export default Topics;
