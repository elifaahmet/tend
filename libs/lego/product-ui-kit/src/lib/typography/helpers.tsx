/** @format */

import {
  UIKitTheme,
  appendValuesWithUnits,
  interpolateStyles,
  UIKitContext,
  ProductTypographyKey as TypographyKey,
} from '@tend/shared/design/ui-kit';

export function themeStylesToCssString(
  theme: UIKitTheme,
  key: TypographyKey
) {
  return interpolateStyles(
    appendValuesWithUnits(
      theme.product.typography[key],
      ['fontSize'],
      UIKitContext.product,
    )
  );
}
