/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographyProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

export interface B1Props extends TypographyProps {
  bold?: boolean;
}

const StyledB1 = styled.p<B1Props>`
  color: ${(props) => props.theme.color[props.color]};
  font-weight: ${(props) =>
    props.bold
      ? props.theme.fontWeight['bold']
      : props.theme.fontWeight['regular']};
  ${(props) => themeStylesToCssString(props.theme, 'mobile-sub')};
`;

const B1 = (props: B1Props) => (
  <StyledB1 color={props.color} bold={props.bold}>
    {props.children}
  </StyledB1>
);

B1.defaultProps = {
  color: 'neutral-off-white',
};

export default B1;
