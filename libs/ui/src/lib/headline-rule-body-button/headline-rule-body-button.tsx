import React from 'react';
import { variant, layout } from 'styled-system';
import styled from 'styled-components';

import { ButtonProps } from '../buttons/button/button';
import { CTALinkProps } from '../buttons/ctalink/ctalink';
import { BodyButton, BodyButtonProps } from '../body-button/body-button';
import { HeadlineRule } from '../headline-rule/headline-rule';


export interface HeadlineRuleBodyButtonProps {
  variant: 'h5' | 'h4' | 'h5Small';
  children? : React.ReactNode;
  title: string;
  buttonText?: string;
  buttonProps?: ButtonProps;
  ctaLinkProps?: CTALinkProps;
  color?: string;
  titleColor?: string;
  ruleColor?: string;
  divWidth?: string | Array<string>;
}

const StyledHeadlineRuleBodyButton = styled.div`
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 0.875rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  ${(props: HeadlineRuleBodyButtonProps) => variant({
    variants: {
      h4: {
        width: props.divWidth,
        '> *': {
          marginBottom: '0.875rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
      h5: {
        width: props.divWidth,
        '> *': {
          marginBottom: '0.75rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
      h5Small: {
        width: props.divWidth,
        '> *': {
          marginBottom: '0.75rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
    },
  })};
`;

export const HeadlineRuleBodyButton = (props: HeadlineRuleBodyButtonProps) => {
  const bodyButtonProps: BodyButtonProps = {
    variant: 'small',
    buttonText: props.buttonText,
    color: props.color,
  };
  if(props.ctaLinkProps) {
    bodyButtonProps.ctaLink = true;
    bodyButtonProps.ctaLinkProps = props.ctaLinkProps;
  } else {
    bodyButtonProps.buttonProps = props.buttonProps;
  }
  return (
    <StyledHeadlineRuleBodyButton {...props}>
      <HeadlineRule variant={props.variant} ruleColor={props.ruleColor} color={props.titleColor}>
        {props.title}
      </HeadlineRule>
      <BodyButton
        {...bodyButtonProps}
      >
        {props.children}
      </BodyButton>
    </StyledHeadlineRuleBodyButton>
  );
};

HeadlineRuleBodyButton.defaultProps = {
  color: 'neutral.4',
};

export default HeadlineRuleBodyButton;
