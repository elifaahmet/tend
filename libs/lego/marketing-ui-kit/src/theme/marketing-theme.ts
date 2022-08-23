/** @format */

import {
  getDefaultExtendedTheme,
  UIKitTheme,
  UIKitContext,
  ColorSchemeConfig,
} from '@tend/shared/design/ui-kit';

export const THEME_NAME = 'marketing';

const colorSchemeConfig: ColorSchemeConfig = {
  primary: {
    brand: 'neutral-off-white',
    text: 'neutral-black',
    background: 'neutral-off-white',
    button: 'primary-magenta',
  },
  secondary: {
    brand: 'neutral-white',
    text: 'neutral-black',
    background: 'neutral-white',
    button: 'neutral-black',
  },
  tertiary: {
    brand: 'primary-green',
    text: 'neutral-white',
    background: 'primary-green',
    button: 'primary-magenta',
  },
  state: {
    success: 'primary-neon-green',
    warning: 'primary-yellow',
    error: 'primary-red',
    disabled: 'neutral-light-gray',
    highlight: 'secondary-yellow',
  },
  accent: {
    primary: 'primary-red',
    secondary: 'primary-orange',
    tertiary: 'primary-magenta',
    quaternary: 'primary-yellow',
  },
  neutral: {
    light: 'neutral-white',
    medium: 'neutral-gray',
    dark: 'neutral-black',
  },
  opacity: {
    mediumBlack: 'opacity-black-medium',
    darkBlack: 'opacity-black-dark',
    mediumWhite: 'opacity-white-medium',
  },
  cta: {
    primary: 'primary-magenta',
    secondary: 'neutral-white',
  },
};

export function getMarketingTheme(): UIKitTheme {
  const theme = getDefaultExtendedTheme(
    UIKitContext.marketing,
    colorSchemeConfig
  );

  theme.name = THEME_NAME;
  const castedTheme = theme as Readonly<UIKitTheme>;

  return castedTheme;
}

const marketingTheme: UIKitTheme = getMarketingTheme();
export default marketingTheme;
