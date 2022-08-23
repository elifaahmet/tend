import React from 'react';
import styled from 'styled-components';

import Grid from '../../layout/grid';

import CategoryTag from '../../labels/category-tag';
import MembersContent from '../../labels/members-content';
import PostTitle from './post-title';
import PostExcerpt from './post-excerpt';
import CTALink from '../../elements/cta-link';

export interface PostProps {
  href?: string;
  title: string;
  description?: string;
  categories: string[];
  color: string;
  member: boolean;
  direction?: 'vertical' | 'horizontal';
}

const Layout = styled(Grid)`
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-areas:
    "GK  GK  GK  GK  GK  GK";

  @media (min-width: 1440px) {
    ${props => props.dir === 'horizontal' ? `
      grid-template-columns: repeat(9, [col-start] 1fr);
      grid-template-areas:
        "GK GK GK GK GK GK GK GK GK";
      ` : `
      grid-template-columns: repeat(6, [col-start] 1fr);
      grid-template-areas:
        "GK  GK  GK  GK  GK  GK";
      `}
  }
`;


const Kicker = styled.div`
  grid-area: GK;
`;



const PostWithoutImage = (props: PostProps) => {
  const { href, title, description, direction, member, categories, color } = props;
  return (
    <Layout dir={direction}>
      <Kicker>

        {categories && categories.map((el, i) => {
          return (
            <CategoryTag
              key={i}
              href="/"
              value={el} />
          )
        })}

        {member && (
          <MembersContent />
        )}

        <PostTitle
          color={color}
          direction={direction}
          title={title}
          href={href} />

        <PostExcerpt
          color="white">
          {description}
        </PostExcerpt>

        <CTALink href={href} />

      </Kicker>
    </Layout>
  );
};

PostWithoutImage.defaultProps = {
  color: 'yellow.0',
  direction: 'vertical',
  member: false,
  href: '/'
}

export default PostWithoutImage;
