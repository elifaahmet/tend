/** @format */

import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import { ColorName } from '@tend/shared/design/tokens';

export type ScreenBreakpointType = 'xs' | 's' | 'm' | 'l';

export interface LayoutProps {
  backgroundColor?: ColorName;
  backgroundImage?: string;
  fullWidth?: ScreenBreakpointType[];
  children: ReactNode;
}

interface InnerProps {
  fullWidth?: ScreenBreakpointType[];
}

const StyledLayout = styled.div<LayoutProps>`
  background-color: ${(props) => props.theme.color[props.backgroundColor]};
  background-size: cover;
  display: flex;
  width: 100%;
`;

const StyledInner = styled.div<InnerProps>`
  width: ${(props) => (props.fullWidth.includes('xs') ? `100%` : `96%`)};
  margin: ${(props) => (props.fullWidth.includes('xs') ? `0` : `0 auto`)};
  @media (min-width: ${(props) => props.theme.breakpoint.small}px) {
    width: ${(props) => (props.fullWidth.includes('s') ? `100%` : `96%`)};
    margin: ${(props) => (props.fullWidth.includes('s') ? `0` : `0 auto`)};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.medium}px) {
    margin: ${(props) => (props.fullWidth.includes('m') ? `0` : `0 auto`)};
    width: ${(props) => (props.fullWidth.includes('m') ? `100%` : `86%`)};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.large}px) {
    margin: ${(props) => (props.fullWidth.includes('l') ? `0` : `0 auto`)};
    width: ${(props) => (props.fullWidth.includes('l') ? `100%` : `73%`)};
  }
`;

export function Layout(props: LayoutProps & InnerProps) {
  return (
    <StyledLayout
      backgroundColor={props.backgroundColor}
      backgroundImage={props.backgroundImage}
    >
      <StyledInner fullWidth={props.fullWidth}>{props.children}</StyledInner>
    </StyledLayout>
  );
}

Layout.defaultProps = {
  fullWidth: [],
};

export default Layout;
