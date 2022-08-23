/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographyProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

export interface L2Props extends TypographyProps {
  bold?: boolean;
}

const StyledL2 = styled.label<L2Props>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) =>
    props.bold
      ? themeStylesToCssString(props.theme, 'radio-button-selected')
      : themeStylesToCssString(props.theme, 'radio-button-unselected')};
`;

const L2 = (props: L2Props) => (
  <StyledL2 color={props.color} bold={props.bold}>
    {props.children}
  </StyledL2>
);

L2.defaultProps = {
  color: 'neutral-off-white',
  bold: false,
};

export default L2;
