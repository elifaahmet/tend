/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledH2 = styled.h2<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'headline-4')};

  @media (min-width: ${(props) => props.theme.breakpoint.medium}px) {
    ${(props) => themeStylesToCssString(props.theme, 'headline-3')};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.large}px) {
    ${(props) => themeStylesToCssString(props.theme, 'headline-2')};
  }
`;

const H2 = (props: TypographicTextProps) => (
  <StyledH2 color={props.color}>{props.children}</StyledH2>
);

H2.defaultProps = {
  color: 'neutral-black',
};

export default H2;
