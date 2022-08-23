/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { TypographicTextProps } from '../../typography.types';
import { themeStylesToCssString } from '../../helpers';

const StyledH5 = styled.h5<TypographicTextProps>`
  color: ${(props) => props.theme.color[props.color]};
  ${(props) => themeStylesToCssString(props.theme, 'headline-5')};
`;

const H5 = (props: TypographicTextProps) => (
  <StyledH5 color={props.color}>{props.children}</StyledH5>
);

H5.defaultProps = {
  color: 'neutral-black',
};

export default H5;
