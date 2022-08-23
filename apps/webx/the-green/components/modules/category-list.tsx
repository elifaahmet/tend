import React from 'react';
import Link from 'next/link';
import { CTALink } from '@tend/ui';
import styled from 'styled-components';

export interface CategoryProps {
  data: {
    id: string;
    slug: string;
    name: string;
    read_restricted: boolean;
  }[];
  current?: any;
  hideTopLine?: boolean;
  sm?: number;
  md?: number;
  lg?: number;
}

export interface CategoryStyleProps {
  sm: number;
  md: number;
  lg: number;
}

export interface ITopic {
  slug: string;
  id: string;
  name: string;
}


const BoxLayout = styled.div<CategoryStyleProps>`
  display: grid;
  grid-row-gap: 1rem;
  grid-template-columns: ${props => `repeat(${props.sm}, [col-start] 1fr)`};
  margin-bottom: 2.25rem;

  @media (min-width: 836px) {
    grid-template-columns: ${props => `repeat(${props.md}, [col-start] 1fr)`};
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: ${props => `repeat(${props.lg}, [col-start] 1fr)`};
  }
`;

const CategoryList = (props: CategoryProps) => {
  const { sm, md, lg, data, current } = props;
  let categories = data || [];
  categories = categories.filter(category => !category.read_restricted);

  return (
    <BoxLayout sm={sm} md={md} lg={lg} >
        {categories &&
          categories.map((topic, index) => (
            <Link key={index} href={`/message-board/${topic.slug}/${topic.id}`}>
              <CTALink
                id={topic.id}
                fontSize="20"
                color={current ? (
                    current.id === topic.id ? 'defaultYellow': 'white'
                ) : (
                  'white'
                )}
                textTransform={'uppercase'}
                variant="large">
                {topic.name}
              </CTALink>
            </Link>
          ))}
      </BoxLayout>
  );
};

CategoryList.defaultProps = {
  sm: 1,
  md: 1,
  lg: 2
};

export default CategoryList;
