/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledB5 = styled.p<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'body-6')};

  @media (min-width: ${(props) => props.theme.breakpoint.medium}px) {
    ${(props) => themeStylesToCssString(props.theme, 'body-5')};
  }
`;

const B5 = (props: TypographicTextProps) => (
  <StyledB5 color={props.color}>{props.children}</StyledB5>
);

B5.defaultProps = {
  color: 'neutral-black',
};

export default B5;
