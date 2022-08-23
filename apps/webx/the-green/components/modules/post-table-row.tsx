import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Grid from '../layout/grid';

import { Rule, Anchor, Paragraph } from '@tend/ui';



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

const Divider = styled.div`
  grid-area: DIV;
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

const StyledParagraph = styled(Paragraph)`
  display: inline !important;
`

interface IPostTableRow {
  topic: {
    id: string;
    title: string;
    slug: string;
    views: number;
    posts_count: number;
    category_id: number;
  };
  category: {
    name: string;
    slug: string;
    id: string | number;
  };
  dark?: boolean;
}

const PostTableRow = ({ topic, category, dark }: IPostTableRow) => {
  const fontColor = dark ? 'black' : 'white';
  const hoverColor = dark ? 'black' : 'neutral.2';

  return (

    <Layout>

      <Divider>
        <Rule size={2} ruleColor={fontColor} />
      </Divider>

      <TopicTitle>

        <Link href={`/message-board/t/${topic.slug}/${topic.id}`}>
          <Anchor fontSize={['1rem']} color={fontColor} hoverColor={hoverColor} bold>{topic.title}</Anchor>
        </Link>

        <Link href={`/message-board/${category.slug}/${category.id}`}>
          <Anchor id={`${category.id}`} color={fontColor} hoverColor={hoverColor} textTransform="uppercase" fontSize={['0.75rem']}>{category.name}</Anchor>
        </Link>

      </TopicTitle>

      {topic.posts_count >= 1 && topic.views >= 0 &&
        <>
          <Replies>
            <Link href="/">
              <StyledParagraph fontSize={['1rem']} color={fontColor} bold>{topic.posts_count - 1}</StyledParagraph>
            </Link>
          </Replies>
          <Views>
            <StyledParagraph fontSize={['1rem']} color={fontColor} bold>{topic.views}</StyledParagraph>
          </Views>
        </>
      }
    </Layout>
  )
}

export default PostTableRow;
