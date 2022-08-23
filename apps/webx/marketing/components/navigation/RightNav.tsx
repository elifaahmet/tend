/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import MobileNav from './AccordionNav';
import styled from 'styled-components';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

import Link from 'next/link';
import { Grid, Anchor, Theme } from '@tend/ui';
import StyledMenuItem from './StyledMenuItem';

interface RightNavProps {
  open: boolean;
}

const StyledNav = styled.div`
  display: flex;
  flex-flow: column nowrap;
  background-color: #e5e5e5;
  position: fixed;
  transform: ${(props: RightNavProps) =>
      props.open ? 'translateX(0)' : 'translateX(100%)'}
    translateY(4rem);
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding-bottom: 12rem;
  transition: transform 0.3s ease-in-out;
  overflow-y: scroll;
  overflow-x: hidden !important;
  z-index: 99999;

  @media (min-width: 836px) {
    transform: ${(props: RightNavProps) =>
        props.open ? 'translateX(0)' : 'translateX(100%)'}
      translateY(7rem);
  }
`;

const MenuAnchor = styled(Anchor)`
  display: block;
  &:visited {
    color: ${Theme.colors.black};
  }
  &:hover,
  &:focus {
    text-decoration: underline;
    color: ${Theme.colors.darkGray};
  }
`;

/* Work around to conditionally use hook */
const BodyScrollLock = () => {
  useBodyScrollLock();
  return <i />;
};

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

const RightNav = (props: RightNavProps) => {
  const { t } = useTranslation();

  const navigation: Navigation = t('navigation', {
    returnObjects: true,
  });

  return (
    <StyledNav tabIndex={-1} open={props.open}>
      {/* When BodyScrollLock mounts and unmounts, overflow hidden is toggled on the body */}
      {props.open && <BodyScrollLock />}

      {navigation.map((el, i) => {
        return el.children ? (
          <MobileNav
            title={el.title}
            meta={el.meta}
            content={el.children}
            open={props.open}
            key={i}
            order={parseInt(i, 10)}
          />
        ) : (
          <StyledMenuItem key={i}>
            <Grid>
              <Link href={el.slug}>
                <MenuAnchor
                  tabIndex={props.open ? 0 : -1}
                  href={el.slug}
                  fontSize={['1.5rem', '2rem', '2.5rem', '2.5rem']}
                  color="neutral.4"
                  hoverColor="neutral.3"
                >
                  {el.title}
                </MenuAnchor>
              </Link>
            </Grid>
          </StyledMenuItem>
        );
      })}
    </StyledNav>
  );
};

export default RightNav;
