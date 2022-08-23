import React from 'react';
import styled from 'styled-components';

import Grid from '../../layout/grid';

import CategoryTag from '../../labels/category-tag';
import MembersContent from '../../labels/members-content';
import PostImage from './post-image';
import PostTitle from './post-title';
import PostExcerpt from './post-excerpt';
import CTALink from '../../elements/cta-link';

export interface PostProps {
  imageUrl?: string;
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
    "IMG IMG IMG IMG IMG IMG"
    "GK  GK  GK  GK  GK  GK";

  @media (min-width: 1440px) {
    ${props => props.dir === 'horizontal' ? `
      grid-template-columns: repeat(9, [col-start] 1fr);
      grid-template-areas:
        "IMG IMG IMG GK GK GK GK GK GK";
      ` : `
      grid-template-columns: repeat(6, [col-start] 1fr);
      grid-template-areas:
        "IMG IMG IMG IMG IMG IMG"
        "GK  GK  GK  GK  GK  GK";
      `}
  }
`;

const GridImage = styled.div`
  grid-area: IMG;
`;

const Kicker = styled.div`
  grid-area: GK;
`;



const Post = (props: PostProps) => {
  const { imageUrl, href, title, description, direction, member, categories, color } = props;
  return (
    <Layout dir={direction}>

      <GridImage>
        <PostImage
          direction={direction}
          src={imageUrl}
          href={href} />
      </GridImage>

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

Post.defaultProps = {
  color: 'yellow.0',
  direction: 'vertical',
  member: false,
  href: '/'
}

export default Post;
