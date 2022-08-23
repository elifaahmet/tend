/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledB1 = styled.p<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'body-3')};

  @media (min-width: ${(props) => props.theme.breakpoint.medium}px) {
    ${(props) => themeStylesToCssString(props.theme, 'body-2')};
  }
  @media (min-width: ${(props) => props.theme.breakpoint.large}px) {
    ${(props) => themeStylesToCssString(props.theme, 'body-2')};
  }
`;

const B1 = (props: TypographicTextProps) => (
  <StyledB1 color={props.color}>{props.children}</StyledB1>
);

B1.defaultProps = {
  color: 'neutral-black',
};

export default B1;
