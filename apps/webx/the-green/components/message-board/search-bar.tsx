import React from 'react';
import Link from 'next/link';
import styled from 'styled-components'

import { CTAButtonLink } from '@tend/ui';


import Grid from '../layout/grid';
import SearchForm from './search-form';
import { useTranslation } from "@tend/webx/utils/next-i18next";

const Layout = styled(Grid)`
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-row-gap: 3rem;
  margin-block-start: 4.25rem;
  margin-block-end: 4.25rem;
  grid-template-areas:
    "CP CP CP CP . ."
    "SA SA SA SA SA SA";
  @media (min-width: 376px) {
    grid-template-areas:
    "CP CP CP . . ."
    "SA SA SA SA SA SA";
  }
  @media (min-width: 836px) {
    grid-template-areas:
    "CP CP CP . . ."
    "SA SA SA SA SA SA";
  }
  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
      "SA SA SA SA SA SA SA SA CP CP CP CP";
  }
`;

const CreateNewPost = styled.div`
  grid-area: CP;

  @media (min-width: 1440px) {
    text-align: right;
  }
`

const SearchArea = styled.div`
  grid-area: SA;
`

const StyledCTAButtonLink = styled(CTAButtonLink)`
  width: 100%;
  text-align: center;
`;

export const SearchBar = () => {
  const { t } = useTranslation();
  return (
    <Layout>
      <SearchArea>
        <SearchForm />
      </SearchArea>
      <CreateNewPost>
        <Link href='/message-board/create-post'>
          <StyledCTAButtonLink
            textTransform="uppercase"
            bg="yellow.0"
            overColor="false"
            borderColor="yellow.0"
            hoverBg="white"
            hoverColor="black"
          >
            { t('Create New Post') }
          </StyledCTAButtonLink>
        </Link>
      </CreateNewPost>
    </Layout>
  )
}
export default SearchBar
