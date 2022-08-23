/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { ColorName } from '@tend/shared/design/tokens';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export interface SeparatorProps {
  contained?: boolean;
  small?: boolean;
  color?: ColorName | null;
}

export const Separator = styled.hr<SeparatorProps>`
  width: ${(props) => (props.contained ? '100%' : '100vw')};
  margin-inline-start: ${(props) =>
    props.contained
      ? 0
      : calculateWithUnit(-props.theme.offset, 'rem', props.theme)};
  border: none;
  height: ${(props) =>
    calculateWithUnit(props.small ? 2 : 3, 'rem', props.theme)};
  background: ${(props) =>
    props.color
      ? props.theme.color[props.color]
      : props.theme.colorScheme.secondary.brand};
`;
Separator.defaultProps = {
  contained: false,
  small: false,
  color: null,
};

export default Separator;
