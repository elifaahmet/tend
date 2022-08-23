import React, { ReactNode } from 'react';

import styled from 'styled-components';
import {
  background,
  color
} from 'styled-system';

import FullBleedLayout from './full-bleed-layout';
export interface LayoutProps {
  bg?: string;
  backgroundImage?: string;
  rowOverlay?: boolean;
  children: ReactNode;
}

interface InnerProps {
  fullWidthOnMobile?: boolean;
}

const StyledLayout = styled(FullBleedLayout)`
  ${color}
  ${background}
  background-size: cover;
  display: flex;
  width: 100%;
  padding-bottom: ${(props: LayoutProps) => props.rowOverlay ? `5rem` : `0`};

  @media (min-width: 375px) {
    /* background-color: pink; */
  }

  @media (min-width: 836px) {
    /* background-color: orange; */
  }

  @media (min-width: 1440px) {
    /* background-color: purple; */
  }
`;

const StyledInner = styled.div<InnerProps>`
  width: ${(props) => props.fullWidthOnMobile ? `100%` : `96%`};
  margin: ${(props) => props.fullWidthOnMobile ? `0` : `0 auto`};
  @media (min-width: 375px) {
    width: ${(props) => props.fullWidthOnMobile ? `100%` : `96%`};
  }

  @media (min-width: 836px) {
    margin: 0 auto;
    width: 86%;
  }

  @media (min-width: 1440px) {
    width: 73%;
  }
`

export function Layout(props: LayoutProps & InnerProps) {
  return (
    <StyledLayout
      bg={props.bg}
      backgroundImage={props.backgroundImage}
      rowOverlay={props.rowOverlay}>
      <StyledInner fullWidthOnMobile={props.fullWidthOnMobile}>
        {props.children}
      </StyledInner>
    </StyledLayout>
  );
}

export default Layout;
