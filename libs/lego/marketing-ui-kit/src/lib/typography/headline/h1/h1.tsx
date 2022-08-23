/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledH1 = styled.h1<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'headline-3')};

  @media (min-width: ${(props) => props.theme.breakpoint.medium}px) {
    ${(props) => themeStylesToCssString(props.theme, 'headline-2')};
  }

  @media (min-width: ${(props) => props.theme.breakpoint.large}px) {
    ${(props) => themeStylesToCssString(props.theme, 'headline-1')};
  }
`;

const H1 = (props: TypographicTextProps) => (
  <StyledH1 color={props.color}>{props.children}</StyledH1>
);

H1.defaultProps = {
  color: 'neutral-black',
};

export default H1;
