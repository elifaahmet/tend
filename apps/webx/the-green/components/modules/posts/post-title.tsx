import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { H3 } from '@tend/ui';

interface Props {
  color?: string;
  direction?: string;
  title: string;
  href: string;
}

const StyledH3 = styled(H3)<{dir: string}>`
  font-size: 2.25rem;
  line-height: 1.10;
  margin-block-start: 1rem;
  margin-block-end: 1rem;

  @media (min-width: 1440px) {
    ${props => props.dir === 'horizontal' ? `
      font-size: 5rem;
      line-height: 0.85;
    ` : `
      font-size: 2.25rem;
      line-height: 1.10;
    `}
  }
`;

const StyledAnchor = styled.a`
  text-decoration: none;
  &:hover,
  &:visited {
    text-decoration: none;
  }

`;

export const PostTitle = ({ direction, href, title, color }: Props) => {
  return (
    <Link href={href} passHref>
      <StyledAnchor>
        <StyledH3
          dir={direction}
          color={color}>
          {title}
        </StyledH3>
      </StyledAnchor>
    </Link>
  )
}

PostTitle.defaultProps = {
  direction: 'vertical',
  color: 'yellow.0'
}

export default PostTitle;
