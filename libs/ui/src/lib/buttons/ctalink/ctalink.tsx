
import React, { Ref } from 'react';

import { color, variant, space, typography } from 'styled-system';
import styled from 'styled-components';

import Icon from '../../icon/icon';

export interface CTALinkProps extends React.HTMLProps<HTMLAnchorElement> {
  variant?: 'large' | 'normal';
  color?: string | null;
  textTransform?: 'uppercase' | 'none' | 'capitalize';
  ref?: Ref<HTMLAnchorElement>;
  as?: never;
  fontSize?: string | Array<string>;
}

const fontSizesMap = {
  large: '1.8rem',
  normal: '1.2rem',
};

const StyledCTALink = styled.a<CTALinkProps>`
  ${color};
  ${space};
  ${typography};
  outline: none;
  cursor: pointer;
  & :last-child {
    transition: 0.25s;
  }
  & :first-child {
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
  }
  white-space: nowrap;
  &:any-link {
    text-decoration: none;
  }
  &:-webkit-any-link {
    text-decoration: none;
  }
  font-family: 'Pilat Condensed';
  display: flex;
  width: 100%;
  text-transform: ${(props: CTALinkProps) => props.textTransform || 'uppercase'};
  ${(props: CTALinkProps) =>
    variant({
      variants: {
        large: {
          fontWeight: 'bold',
          fontSize: '2rem',
          lineHeight: '87%',
          '& :last-child' : {
            minWidth: '3.5rem',
            paddingLeft: 0,
          },
          '&:hover': {
            '& :last-child' : {
              paddingLeft: '1.5rem',
            }
          },
        },
        medium: {
          fontWeight: 'bold',
          fontSize: '1.5rem',
          lineHeight: '87%',
          '& :last-child' : {
            minWidth: '3rem',
            paddingLeft: 0,
          },
          '&:hover': {
            '& :last-child' : {
              paddingLeft: '1.5rem',
            }
          },
        },
        normal: {
          fontSize: '1rem',
          lineHeight: '120%',
          fontWeight: 'bold',
          fontFamily: 'Pilat',
          '& :last-child' : {
            minWidth: '2.5rem',
            paddingLeft: 0,
          },
          '&:hover': {
            '& :last-child' : {
              paddingLeft: '1.5rem',
            }
          },
        },
      },
    })};
`;
const CtaGrid = styled.div`
display: grid;
width: 0;
`;

export const CTALink = React.forwardRef((props: CTALinkProps, ref: Ref<HTMLAnchorElement>) => {
  return (
    <CtaGrid>
      <StyledCTALink {...props} className={props.className}ref={ref}>
        <span>{props.children}</span>
        <Icon iconName="Arrow" fontSize={fontSizesMap[props.variant]} color={props.color} bg="transparent.0" />
      </StyledCTALink>
    </CtaGrid>
  );
});

CTALink.defaultProps = {
  variant: 'normal',
  color: 'neutral.4',
  textTransform: 'uppercase',
};

export default CTALink;
