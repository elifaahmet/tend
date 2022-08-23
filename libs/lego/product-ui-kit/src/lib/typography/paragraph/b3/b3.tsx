/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographyProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledB3 = styled.p<TypographyProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'legal')};
`;

const B3 = (props: TypographyProps) => (
  <StyledB3 color={props.color}>{props.children}</StyledB3>
);

B3.defaultProps = {
  color: 'neutral-off-white',
};

export default B3;
