/** @format */

import React from 'react';
import { addDecorator } from '@storybook/react';
import { getMarketingTheme } from '../src/theme/marketing-theme';
import { withThemes } from '@react-theming/storybook-addon';
import { ThemeProvider } from 'emotion-theming';
import { ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { generateStorybookParams } from '@tend/shared/design/ui-kit';
import {
  globalWebStyles,
  storybookScrollLock,
} from '@tend/shared/design/ui-kit';

export const parameters = generateStorybookParams({
  includeTablets: true,
  defaultViewport: 'DESKTOP',
});
const storyBookMarketThemeInstance = getMarketingTheme();

addDecorator(withThemes(ThemeProvider, [storyBookMarketThemeInstance]));
addDecorator((Story) => (
  <ThemeProviderEmotion theme={storyBookMarketThemeInstance}>
    <Story />
  </ThemeProviderEmotion>
));
