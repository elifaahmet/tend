/** @format */

import { ColorName } from '@tend/shared/design/tokens';
import { ReactNode } from 'react';

export interface TypographicTextProps {
  color?: ColorName;
  children: ReactNode | string;
}

export interface LabelProps extends TypographicTextProps {
  color?: ColorName;
  children: ReactNode | string;
  bold?: boolean;
}
