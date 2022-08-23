/**@format */

import React from 'react';
import styled from '@emotion/styled';
import {
  appendValuesWithUnits,
  interpolateStyles,
  BaseInputKey as InputCompositeKey,
} from '@tend/shared/design/ui-kit';

export interface InputStyleTextProps {
  variant: InputCompositeKey;
}

export const InputStyleText = styled.p<InputStyleTextProps>`
  ${(props) =>
    interpolateStyles(
      appendValuesWithUnits(props.theme.base.input[props.variant], ['fontSize'])
    )};
  color: ${(props) => props.theme.colorScheme.primary.text};
  border: none;
  padding: 0;
  margin: 0;
`;
