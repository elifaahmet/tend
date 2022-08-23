/**@format */

import React from 'react';
import styled from '@emotion/styled';
import type { Spacer as SpacerValueTypes } from '@tend/shared/design/tokens';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export type SpacerValue = 0 | SpacerValueTypes;

export interface SpacerProps {
  top?: SpacerValue;
  bottom?: SpacerValue;
  left?: SpacerValue;
  right?: SpacerValue;
}

export const Spacer = styled.div<SpacerProps>`
  padding-block-start: ${(props) =>
    calculateWithUnit(props.top, 'rem', props.theme)};
  padding-block-end: ${(props) =>
    calculateWithUnit(props.bottom, 'rem', props.theme)};
  padding-inline-start: ${(props) =>
    calculateWithUnit(props.left, 'rem', props.theme)};
  padding-inline-end: ${(props) =>
    calculateWithUnit(props.right, 'rem', props.theme)};
`;
Spacer.defaultProps = {
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
};

/**@tech-debt: replace with 8 pt grid system once we have it */

export const Layout: React.FC = (props) => (
  <Spacer
    top={16}
    bottom={16}
    left={16}
    right={16}
    style={{ overflowY: 'auto', width: '100%' }}
  >
    {props.children}
  </Spacer>
);
