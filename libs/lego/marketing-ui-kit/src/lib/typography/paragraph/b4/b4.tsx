/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledB4 = styled.p<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'body-6')};

  @media (min-width: ${(props) => props.theme.breakpoint.medium}px) {
    ${(props) => themeStylesToCssString(props.theme, 'body-5')};
  }
  @media (min-width: ${(props) => props.theme.breakpoint.large}px) {
    ${(props) => themeStylesToCssString(props.theme, 'body-4')};
  }
`;

const B4 = (props: TypographicTextProps) => (
  <StyledB4 color={props.color}>{props.children}</StyledB4>
);

B4.defaultProps = {
  color: 'neutral-black',
};

export default B4;
