import React from 'react';

import { color, layout, space, variant } from 'styled-system';
import { get } from '@styled-system/core';
import styled from 'styled-components';

import theme from '../theme';
import { Anchor, AnchorProps } from '../anchor/anchor';
import { Icon, IconProps } from '../icon/icon';

/* eslint-disable-next-line */
export interface SocialMediaLinkProps extends AnchorProps {
  name: 'Facebook' | 'Instagram' | 'Twitter';
  theme: 'light' | 'dark';
  variant?: 'extraSmall' | 'small' | 'normal';
  noBorder?: boolean;
}

const StyledIcon = styled(Icon) <IconProps>`
  ${layout}
`;

const StyledSocialMediaLink = styled(Anchor) <SocialMediaLinkProps>`
  ${color}
  ${layout}
  ${space}
  display: flex;
  justify-content: center;
  align-items: center;
  border-width: 0.0625em;
  border-style: ${(props: SocialMediaLinkProps) => props.noBorder ? 'none' : 'solid'};
  place-content: center;
  text-align: center;
  vertical-align: middle;
  border-color: ${(props: SocialMediaLinkProps) =>
    get(theme, `${props.theme === 'dark' ? 'colors.neutral.0' : 'colors.neutral.4'}`)};
  ${variant({
      variants: {
        extraSmall: {
          width: ['1.1rem', '1.1rem', '1.1rem', '1.2rem'],
          height: ['1.1rem', '1.1rem', '1.1rem', '1.2rem'],
        },
        small: {
          width: ['2rem', '2.75rem', '3rem', '3.375rem'],
          height: ['2rem', '2.75rem', '3rem', '3.375rem'],
        },
        normal: {
          width: ['2.75rem', '2.75rem', '3rem', '3.375rem'],
          height: ['2.75rem', '2.75rem', '3rem', '3.375rem'],
        },
      },
    })}
`;

export const SocialMediaLink = (props: SocialMediaLinkProps) => {
  return (
    <StyledSocialMediaLink {...props} hoverColor="neutral.2">
      <StyledIcon iconName={props.name} color={props.theme === 'light' ? 'neutral.4' : 'neutral.0'} />
    </StyledSocialMediaLink>
  );
};

SocialMediaLink.defaultProps = {
  theme: 'light',
  variant: 'normal',
};

export default SocialMediaLink;
