import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import css from '@styled-system/css';

import Grid from '../layout/grid';
import {Paragraph, Label, Theme, Input, Button} from '@tend/ui';
import {useRouter} from "next/dist/client/router";
import {useTranslation} from "@tend/webx/utils/next-i18next";

const Layout = styled(Grid)`
  display: flex;
  width: 100%;
  grid-column-gap: 0;
  flex-direction: column;
`;

const SearchInputContainer = styled.div`
  flex-grow: 2;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${Theme.breakpoints[0]}) {
    flex-direction: row;
  }
`;


const SearchInput = styled(Input)`
  height: ${Theme.sizes.smallButtonHeight};
  @media (min-width: ${Theme.breakpoints[0]}) {
    height: ${Theme.sizes.mediumButtonHeight};
  }
  width: 100%;
  background: white;
  display: inline-block;
`;

const SearchLabel = styled(Label)`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap; /* added line */
  border: 0;
`;

interface SearchButtonProps{
  enableSearch: boolean;
}

const SearchButton = styled(Button)<SearchButtonProps>`
  height: ${Theme.sizes.smallButtonHeight};
  width: 50%;
  align-self: flex-end;
  line-height: 120%;
  @media (min-width: ${Theme.breakpoints[0]}) {
    width: 20%;
    height: ${Theme.sizes.mediumButtonHeight};
  }

  @media (min-width: ${Theme.breakpoints[2]}) {
    ${(props: SearchButtonProps) => css({
      cursor: props.enableSearch ? 'pointer' : 'not-allowed',
    })};
  }



`;


const SearchForm = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const [ term, setTerm ] = useState('');
  const [ error, setError ] = useState('');

  useEffect(() => {
    setTerm('');
  }, []);

  const handleChange = e => {
    e.persist()
    const { value } = e.target;
    setError('');

    setTerm(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if(!term.length) {
      setError(t('search.form.error'));
      return;
    }
    return router.push({
      pathname: '/message-board/s/',
      query: {
        term: term
      }},
      undefined, {
        shallow: false
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Layout>
        <Container>
          <SearchInputContainer>
            <SearchLabel htmlFor="input" aria-label="Search" color="white">{ t('Search') }</SearchLabel>
            <SearchInput
              name="term"
              value={term}
              fontSize="1rem"
              placeholder={t('Search')}
              onChange={handleChange}
              bg="white"
              textTransform="none"
              rule={false}
            />
          </SearchInputContainer>
          <SearchButton
            enableSearch={!!(term.length)}
            type="submit"
            bg='yellow.0'
            variant="search"
            textTransform="uppercase"
            color="black"
            hoverColor="white"
            hoverBg="black">
            { t('Search') }
          </SearchButton>
        </Container>
        { error && <Paragraph color="defaultRed">{error}</Paragraph> }
      </Layout>
    </form>
  );
};

export default SearchForm;
