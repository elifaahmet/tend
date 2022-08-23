import React from 'react';
import styled from 'styled-components';

import Grid from '../../layout/grid';

import CategoryTag from '../../labels/category-tag';
import MembersContent from '../../labels/members-content';
import SmallPostImage from './small-post-image';
import PostTitle from './post-title';
import CTALink from '../../elements/cta-link';

export interface PostProps {
  categories?: string[];
  color?: string;
  direction: 'vertical' | 'horizontal';
  href?: string;
  imageUrl?: string;
  member?: boolean;
  title: string;
}

const Layout = styled(Grid)`
  grid-template-columns: repeat(3, [col-start] 1fr);
  grid-template-areas:
    "IMG IMG IMG"
    "GK  GK  GK";

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, [col-start] 1fr);
    grid-template-areas:
      "IMG IMG IMG"
      "GK  GK  GK ";
  }
`;

const GridImage = styled.div`
  grid-area: IMG;

`;

const Kicker = styled.div`
  grid-area: GK;
`;

const SmallPost = (props: PostProps) => {
  const { imageUrl, color, href, title, direction, member, categories } = props;

  return (
    <Layout dir={direction}>
      {imageUrl && (
        <GridImage>
          <SmallPostImage
            src={imageUrl}
            href={href} />
        </GridImage>
      )}

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
          title={title}
          href={href} />

        <CTALink href={href} />

      </Kicker>
    </Layout>
  );
};

SmallPost.defaultProps = {
  color: 'yellow.0',
  member: false,
  href: '/'
}

export default SmallPost;
