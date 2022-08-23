import React from 'react';

import styled, { ThemeProvider } from 'styled-components';
import { color } from 'styled-system';

import { Theme } from '@tend/ui';

const StyledThemeLayout = styled.div<{ bg?: string }>`
  ${color}
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
`;

interface ThemeLayoutProps {
  children?: React.ReactNode | React.ReactNodeArray;
  bg?: string;
}

const ThemeLayout = (props: ThemeLayoutProps) => {
  return (
    <ThemeProvider theme={Theme}>
      <StyledThemeLayout {...props}>{props.children}</StyledThemeLayout>
    </ThemeProvider>
  );
};

export default ThemeLayout;
