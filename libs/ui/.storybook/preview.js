import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import GlobalStyleSheet from '../src/lib/global-style-sheet/global-style-sheet';

import Theme from '../src/lib/theme';
const themes = [Theme];

//TODO - ADD COLOR SWATCHES

export const parameters = {
  controls: { expanded: true },
  viewport: {
    viewports: {
      DESKTOP: {
        name: 'DESKTOP',
        styles: {
          width: Theme.breakpoints[2],
          height: '963px',
        },
      },
      TABLET: {
        name: 'TABLET',
        styles: {
          width: Theme.breakpoints[1],
          height: '963px',
        },
      },
      MOBILE: {
        name: 'MOBILE',
        styles: {
          width: Theme.breakpoints[0],
          height: '963px',
        },
      },
    },
  },
};

addDecorator(withThemesProvider(themes));
addDecorator(Story => (
  <>
    <GlobalStyleSheet />
    <Story />
  </>
));
