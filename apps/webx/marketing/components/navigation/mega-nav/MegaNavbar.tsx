/** @format */

import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import DropdownNav from './DropdownNav';

const StyledMegaNavbar = styled.nav`
  display: none;
  @media only screen and (min-width: 1440px) {
    display: flex;
    flex-direction: row;
    justify-self: flex-end;
  }
`;

interface Navigation {
  map(arg0: (el: Navigation, i: string) => JSX.Element): React.ReactNode;
  title: string;
  slug?: string;
  meta: {
    background: string;
    color: string;
  };
  children: Array<{
    title: string;
    slug: string;
  }>;
}

export const MegaNavbar = () => {
  const { t } = useTranslation();

  const navigation: Navigation = t('navigation', {
    returnObjects: true,
  });

  return (
    <StyledMegaNavbar>
      {navigation.map((el, i) => {
        return (
          <DropdownNav
            title={el.title}
            meta={el.meta}
            href={el.slug}
            content={el.children || []}
            key={i}
          />
        );
      })}
    </StyledMegaNavbar>
  );
};

export default MegaNavbar;
