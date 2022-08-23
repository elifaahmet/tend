import React from 'react';

import { get } from '@styled-system/core';
import styled from 'styled-components';
import { layout, color, variant } from 'styled-system';

import theme from '../theme';

export interface LogoProps {
  svgWidth?: string | Array<string>,
  color: string,
  variant?: 'normal',
};

const StyledSVGIcon = styled.svg`
  ${color}
  ${layout}
  ${(props: LogoProps) => variant({
    variants: {
      normal: {
          width: props.svgWidth,
        },
      }
  })}
`;

export const Logo = (props: LogoProps) => {
  return (
    <StyledSVGIcon
      viewBox="0 0 134 32"
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0h13.233v5.142H0V0zm115.684 0h1.546c9.368 0 16.189 6.69 16.189 15.973 0 9.192-6.821 15.881-16.189 15.881h-11.368V0h5.593v26.666h5.775c6.185 0 10.686-4.505 10.686-10.739 0-6.234-4.501-10.785-10.686-10.785h-1.546V0zm-82.99 0H19.463v5.142h13.233V0zm14.734 0h14.506v5.142H47.428V0zM19.19 5.46h-5.593V31.81h5.593V5.46zm78.578 15.382h-5.593V0h5.638l-.045 20.842zM73.12 0h-3.683v31.854h5.593V9.502l18.28 22.352h4.456v-3.55L75.031 0h-1.91zM58.525 18.248H43.609v8.464H62.3v5.142H38.016V0h5.593v13.151h14.916v5.097z"
        fill={get(theme, `colors.${props.color}`)}
      />
    </StyledSVGIcon>
  );
};

Logo.defaultProps = {
  svgWidth: ['6.8rem', '6.8rem', '7.1rem', '8rem'],
  color: 'neutral.4',
  variant: 'normal',
};

export default Logo;
