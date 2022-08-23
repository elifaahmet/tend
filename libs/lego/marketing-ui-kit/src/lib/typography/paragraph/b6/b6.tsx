/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledB6 = styled.p<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'body-6')};
`;

const B6 = (props: TypographicTextProps) => (
  <StyledB6 color={props.color}>{props.children}</StyledB6>
);

B6.defaultProps = {
  color: 'neutral-black',
};

export default B6;
