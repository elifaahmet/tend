import React from 'react';
import { typography, color, space, grid } from 'styled-system';
import styled from 'styled-components';

import Paragraph from '../typography/paragraph/paragraph';
import { Button, ButtonProps } from '../buttons/button/button';
import { CTALink, CTALinkProps } from '../buttons/ctalink/ctalink';


export interface BodyButtonProps {
  variant: 'hero' | 'xxl' | 'xl' | 'large' | 'medium' | 'small';
  ctaLink?: boolean;
  children? : React.ReactNode;
  buttonText?: string;
  buttonProps?: ButtonProps;
  ctaLinkProps?: CTALinkProps;
  color?: string;
  fontWeight?: string;
};

const bodiesMap = {
  xxl: 'b0',
  xl: 'b0',
  large: 'b1',
  medium: 'b2',
  small: 'b3',
};

const buttonsMap = {
  xxl: 'medium',
  xl: 'small',
  large: 'small',
  medium: 'small',
  small: 'small',
};

const StyledBodyButton = styled.div`
  ${typography};
  ${color};
  ${space};
  ${grid};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const BodyButton = (props: BodyButtonProps) => {
  return (
    <StyledBodyButton {...props}>
      <Paragraph marginBottom="1.5rem" variant={bodiesMap[props.variant]} color={props.color}>
        {props.children}
      </Paragraph>
      {
        props.ctaLink
          ? (
            <CTALink variant="normal" {...props.ctaLinkProps}>{props.buttonText}</CTALink>
          ) : (
            props.buttonText ? (
              <Button variant={buttonsMap[props.variant]} {...props.buttonProps}>{props.buttonText}</Button>
            ) : (
              null
            )
          )
      }
    </StyledBodyButton>
  );
};

BodyButton.defaultProps = {
  variant: 'xxl',
  ctaLink: false,
  color: 'neutral.4',
};

export default BodyButton;
