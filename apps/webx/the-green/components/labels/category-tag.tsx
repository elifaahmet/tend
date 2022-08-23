import React from 'react'
import styled from 'styled-components';
import BaseLabel from './base-label';

interface Props {
  color?: string;
  href?: string;
  value: string;
}

const StyledLink = styled.span`
  color: white;
  a {
    color: white;
    text-decoration: none;

    &:visited,
    &:active {
      color: white;
    }
  }
`

export const StyledCategoryTag = styled(BaseLabel)`
  display: inline-block;
  border: 1px solid white;
  border-radius: 18px;
`;

export const CategoryTag = ({href, value}: Props) => {
  return (
    <StyledLink>
      <StyledCategoryTag>
        {value}
      </StyledCategoryTag>
    </StyledLink>
  );
}

CategoryTag.defaultProps = {
  color: "white",
  value: '',
  href: '/'
}

export default CategoryTag;
