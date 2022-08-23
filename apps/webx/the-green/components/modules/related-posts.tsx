import React from 'react';
import { H3, Layout, Paragraph, CTAButtonLink } from '@tend/ui';
import Link from 'next/link';
import styled from 'styled-components';
import Grid from '../layout/grid';
import PostTableRow from './post-table-row';
import { useTranslation } from '@tend/webx/utils/next-i18next';

export interface RelatedPostProps {
  topics: {
    id: string;
    title: string;
    slug: string;
    views: number;
    posts_count: number;
    category_id: number;
  }[];
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  postCategory: {
    id: number;
    label: string;
    slug: string;
  };
}

const RelatedPostWrapper = styled.div`
  background-color: #E8E8E3;
  padding: 64px 0;
`

const RelatedPostsTableHeaderLayout = styled(Grid)`
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

const Replies = styled.div`
  grid-area: RE;
  text-align: right;
`;

const Views = styled.div`
  grid-area: VIEWS;
  text-align: right;
`;

const LoadAllPosts = styled.div`
  display: grid;
  justify-content: center;
  align-content: center;

  a {
    width: 100%;
  }
`;


export const RelatedPosts = ({ categories, postCategory, topics }: RelatedPostProps) => {
  const {t} = useTranslation();
  return (
    <RelatedPostWrapper>
      <Layout>
        <H3
          color="black"
          textTransform={'uppercase'}>
          {
            topics.length > 0 ? `Related posts in ${(postCategory.label[0] !== '#' ? '#' : '') +  postCategory.label.replace(/ /g, '')}` : 'Join the conversation'
          }
        </H3>

        <RelatedPostsTableHeaderLayout>
          {topics.length > 0 ? <>
            <Replies>
              <Paragraph color="black" bold textTransform="uppercase">{t('Replies')}</Paragraph>
            </Replies>

            <Views>
              <Paragraph color="black" bold textTransform="uppercase">{t('Views')}</Paragraph>
            </Views>
          </> : ''}
        </RelatedPostsTableHeaderLayout>

        {topics.slice(0, 4).map((topic, i) => {
          const category = categories.find(category => category.id === topic.category_id);
          return (
            <PostTableRow topic={topic} category={category} key={i} dark={true} />
          )
        })}
        <LoadAllPosts>
          <Link href={`/message-board${postCategory.slug}/${postCategory.id}`}>
            <div style={{ width: topics.length > 0 ? 170 : 215 }}>
              <CTAButtonLink bg="black" color="white">
                {topics.length > 0 ? t('Load all posts') : t('Visit message board')}
              </CTAButtonLink>
            </div>
          </Link>
        </LoadAllPosts>
      </Layout>
    </RelatedPostWrapper>
  );
};

export default RelatedPosts;
