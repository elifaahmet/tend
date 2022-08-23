/** @format */

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation, i18n } from '@tend/webx/utils/next-i18next';
import Link from 'next/link';

import { Logo, CTAButtonLink, LanguageSwitcher, Theme } from '@tend/ui';
import Navbar from './navigation/Navbar';
import MegaNavbar from './navigation/mega-nav/MegaNavbar';

const StyledHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-areas: 'Logo Logo Menu Menu Menu Menu';
  grid-column-gap: 2.8125rem;
  grid-row-gap: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (min-width: ${(props) => props.theme.breakpoints[0]}) {
    grid-column-gap: 3.75rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: ${(props) => props.theme.breakpoints[1]}) {
    grid-column-gap: 3.75rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    margin-top: 2rem;
    margin-bottom: 2rem;
    grid-template-areas: 'Logo Logo . Menu Menu Menu Menu Menu Menu Menu Menu Menu';
  }
`;

const LogoArea = styled.div`
  grid-area: Logo;
`;

const Menu = styled.div`
  grid-area: Menu;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  nav:first-child {
    order: 2;
  }

  & > a {
    order: 3;
  }

  nav:nth-child(2) {
    order: 4;
    width: auto;
    margin-left: 0.5rem;
  }

  @media (min-width: 1440px) {
    justify-content: flex-end;

    nav:first-child {
      order: 1;
    }

    nav:nth-child(2) {
      order: 2;
      width: 100%;
    }

    & > a {
      order: 3;
    }
  }
`;

const StyledLanguageSwitcherDiv = styled.div`
  order: 1;
  margin-right: 0.5rem;
  @media only screen and (min-width: 1440px) {
    order: 4;
    margin-left: 1rem;
    position: absolute;
    right: 7%;
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { locale, pathname } = router;
  const isLocaleMX = locale.slice(-2) === 'MX';

  return (
    <StyledHeader>
      <LogoArea>
        <Link href="/">
          <a href="/">
            <Logo />
          </a>
        </Link>
      </LogoArea>
      <Menu>
        <MegaNavbar />
        <Navbar />
        <Link href="/join-now">
          <CTAButtonLink
            size="small"
            overColor="true"
            showHoverBorder="true"
            bg="black"
            borderColor="black"
            color="white"
            hoverBg="white"
            hoverColor="black"
            textTransform="uppercase"
          >
            {t('common:cta.join-now')}
          </CTAButtonLink>
        </Link>
        {/**
        {!isLocaleMX && (
          <StyledLanguageSwitcherDiv>
            <LanguageSwitcher
              color="black"
              languages={['en', 'es']}
              onLanguageSelect={(language: string) => {
                router.push(pathname, pathname, {
                  locale: `${language}-${locale.slice(-2)}`,
                });
              }}
              selected={locale.slice(0, 2)}
            />
          </StyledLanguageSwitcherDiv>
        )}
        **/}
      </Menu>
    </StyledHeader>
  );
};

export default Header;
