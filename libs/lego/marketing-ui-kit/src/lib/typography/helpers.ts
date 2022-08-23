/** @format */

import {
  UIKitTheme,
  MarketingTypographyKey as TypographyKey,
  appendValuesWithUnits,
  interpolateStyles,
} from '@tend/shared/design/ui-kit';

export function themeStylesToCssString(
  theme: UIKitTheme,
  key: TypographyKey
) {
  return interpolateStyles(
    appendValuesWithUnits(theme.marketing.typography[key], ['fontSize'])
  );
}
