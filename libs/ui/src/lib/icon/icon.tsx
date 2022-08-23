import React from 'react';

import styled, { ThemeProps } from 'styled-components';
import { color, system, compose, typography, layout } from 'styled-system';

import { getSvgIcon } from './svg-icon';

export interface IconProps {
  iconName: string;
  color?: string;
  colors?: Array<string>;
  fontSize?: string | Array<string>;
  svgHeight?: string | Array<string>;
  svgWidth?: string | Array<string>;
}

const StyledIcon = styled.i`
  ${typography};
  ${layout};
  font-family: "TendIcons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smooththing: grayscale;
  display: block;
  font-size: ${(props: IconProps) => `${props.fontSize}`};

  &:before {
    content: ${(props: IconProps & ThemeProps<{ icons: Record<string, unknown> }>) => `'${props.theme.icons[props.iconName]}'`};
    ${compose(
      system({
        fontWeight: {
          property: 'fontWeight',
        },
      }),
      color
    )}
  }
`;

export const Icon = (props: IconProps) => {
  const SvgIcon = getSvgIcon(props);

  return SvgIcon ? <SvgIcon {...props} /> : <StyledIcon {...props} />;
};

Icon.defaultProps = {
  fontSize: '2rem',
  color: 'neutral.4',
  fontWeight: 1,
  bg: 'transparent.0',
};

export default Icon;
