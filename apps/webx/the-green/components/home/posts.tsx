import React from 'react';
import styled from 'styled-components';
import Carousel, { Item } from 'react-grid-carousel';

import Post from '../modules/posts/post';
import PostWithoutImage from '../modules/posts/post-without-image';
import SmallPost from '../modules/posts/small-post';
import AroundTheCorner from '../modules/around-the-corner';
import LatestComments from '../modules/latest-comments';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';
import {useTranslation} from "@tend/webx/utils/next-i18next";

export interface Article {
  page_title?: string;
  page_description?: string;
  page_author?: string;
  page_image?: string;
  title?: string;
  description?: string;
  author?: string;
  categories?: string[];
  article_tier?: string;
  hero_image_credit?: string;
  hero_image?: string;
  read_duration?: string;
  publish_date?: string;
  title_color?: string;
  slug: string;
  order?: number;
  locale: 'es-MX' | 'es-US' | 'en-MX' | 'en-US';
}

const GridLayout = styled.div`
  margin-bottom: 2.25rem;
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-rows: auto 1fr;
  grid-column-gap: 2.8125rem;
  grid-row-gap: 2.25rem;
  grid-template-areas:
    "FP         FP         FP         FP         FP         FP"
    "LP2        LP2        LP2        LP2        LP2        LP2"
    "SP1        SP1        SP1        SP1        SP1        SP1"
    "LP3        LP3        LP3        LP3        LP3        LP3"
    "RT         RT         RT         RT         RT         RT"
    "LP4        LP4        LP4        LP4        LP4        LP4"
    "LP5        LP5        LP5        LP5        LP5        LP5"
    "SP2        SP2        SP2        SP2        SP2        SP2"
    "LP6        LP6        LP6        LP6        LP6        LP6"
    "LC        LC        LC        LC        LC        LC";

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
      "FP FP FP FP FP FP LP2 LP2 LP2 LP2 LP2 LP2"
      "FP FP FP FP FP FP LP2 LP2 LP2 LP2 LP2 LP2"
      "SP1 SP1 SP1 SP1 SP1 SP1 SP1 SP1 SP1 SP1 SP1 SP1"
      "LP3 LP3 LP3 LP3 LP3 LP3 RT RT RT RT RT RT"
      "LP4 LP4 LP4 LP4 LP4 LP4 LP5 LP5 LP5 LP5 LP5 LP5"
      "SP2 SP2 SP2 SP2 SP2 SP2 SP2 SP2 SP2 SP2 SP2 SP2"
      "LP6 LP6 LP6 LP6 LP6 LP6 LC LC LC LC LC LC";
    }
`;

const SingleCard = styled.div`
  &[data-area|="featured-post"]  { grid-area: FP; }
  &[data-area|="roadmap-teaser"] { grid-area: RT; }
  &[data-area|="latest-comments"] { grid-area: LC; }
  &[data-area|="community-poll"] { grid-area: CP; }
  &[data-area|="second-large-post"]   { grid-area: LP2; }
  &[data-area|="third-large-post"]   { grid-area: LP3; }
  &[data-area|="fourth-large-post"]   { grid-area: LP4; }
  &[data-area|="fifth-large-post"]   { grid-area: LP5; }
   &[data-area|="sixth-large-post"]   { grid-area: LP6; }
`;

const MultiPosts = styled.div`
  &[data-area|="first-small-posts"] { grid-area: SP1; }
  &[data-area|="second-small-posts"] { grid-area: SP2; }

  // Override magin for react-grid-carousel overflow container
  // Note: This is not the main container that is configuragble by props/
  @media (min-width: 1440px) {
    & > div > div + div {
      margin: 0;

      & > div {
        padding-left: 0;

        & > div:last-of-type > :last-of-type {
          padding-right: 0;
        }
      }
    }
  }
`;

interface Props {
  allArticles: Article[];
}

/* eslint-disable react-hooks/rules-of-hooks */
const Posts = (props: Props) => {
  const { t } = useTranslation();
  const articles: Article[] = props.allArticles.sort((articleA, articleB) => articleA.order - articleB.order);
  return (
    <GridLayout>
      <SingleCard data-area="featured-post">
        <Post
          title={t('manifesto.title')}
          description={t('manifesto.description')}
          categories={[t('manifesto.categories')]}
          imageUrl={usePrefixedWithBasePath(`/images/${t('manifesto.hero_image')}`)}
          href={`/${t('manifesto.slug')}`}/>
      </SingleCard>
      <SingleCard data-area="second-large-post">
        {articles[0] && <Post
          title={articles[0].title || articles[0].page_title}
          description={articles[0].description || articles[0].page_description}
          categories={articles[0].categories}
          imageUrl={usePrefixedWithBasePath(`/images/${articles[0].hero_image}`)}
          href={`/article/${articles[0].slug}`}/>
        }
      </SingleCard>

      <MultiPosts data-area="first-small-posts">
        <Carousel
          cols={4}
          gap={60}
          responsiveLayout={[
            {
              breakpoint: 836,
              gap: 10,
              cols: 2
            }
          ]}
          mobileBreakpoint={670}>
          {articles.slice(1,5).map((article, index) =>
            (<Item key={index}>
              <SmallPost
                title={article.title || article.page_title}
                direction="vertical"
                categories={article.categories}
                imageUrl={usePrefixedWithBasePath(`/images/${article.hero_image}`)}
                href={`/article/${article.slug}`}
                color={`default${article.title_color?.charAt(0).toUpperCase() + article.title_color?.slice(1)}`}
              />
            </Item>
            ))
          }
        </Carousel>
      </MultiPosts>
      <SingleCard data-area="third-large-post">
        {articles[5] && <Post
          title={articles[5].title || articles[5].page_title}
          description={articles[5].description || articles[5].page_description}
          categories={articles[5].categories}
          imageUrl={usePrefixedWithBasePath(`/images/${articles[5].hero_image}`)}
          href={`/article/${articles[5].slug}`}
        />
        }
      </SingleCard>

      <SingleCard data-area="roadmap-teaser">
        <AroundTheCorner />
      </SingleCard>

      <SingleCard data-area="fourth-large-post">
        {articles[6] && <PostWithoutImage
          title={articles[6].title || articles[6].page_title}
          description={articles[6].description || articles[6].page_description}
          categories={articles[6].categories}
          href={`/article/${articles[6].slug}`}/>
        }
      </SingleCard>
      <SingleCard data-area="fifth-large-post">
        {articles[7] && <PostWithoutImage
          title={articles[7].title || articles[7].page_title}
          description={articles[7].description || articles[7].page_description}
          categories={articles[7].categories}
          href={`/article/${articles[7].slug}`}/>
        }
      </SingleCard>

      <MultiPosts data-area="second-small-posts">
        <Carousel
          cols={4}
          gap={60}
          responsiveLayout={[
            {
              breakpoint: 836,
              gap: 10,
              cols: 2
            }
          ]}
          mobileBreakpoint={670}>
          {articles.slice(8,12).map((article, index) =>
            (<Item key={index}>
                <SmallPost
                  title={article.title || article.page_title}
                  direction="vertical"
                  categories={article.categories}
                  imageUrl={usePrefixedWithBasePath(`/images/${article.hero_image}`)}
                  href={`/article/${article.slug}`}
                  color={`default${article.title_color?.charAt(0).toUpperCase() + article.title_color?.slice(1)}`}
                />
              </Item>
            ))
          }
        </Carousel>
      </MultiPosts>
      <SingleCard data-area="sixth-large-post">
        {articles[12] && <Post
          title={articles[12].title || articles[12].page_title}
          description={articles[12].description || articles[12].page_description}
          categories={articles[12].categories}
          imageUrl={usePrefixedWithBasePath(`/images/${articles[12].hero_image}`)}
          href={`/article/${articles[12].slug}`}/>
        }
      </SingleCard>

      <SingleCard data-area="latest-comments">
        <LatestComments />
      </SingleCard>


    </GridLayout>
  );
};

export default Posts;
