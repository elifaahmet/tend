import React from 'react';
import { typography, variant, color, space } from 'styled-system';
import styled from 'styled-components';

import { HeadlineBody, HeadlineBodyProps } from '../headline-body/headline-body';
import { Button, ButtonProps } from '../buttons/button/button';
import CTALink, { CTALinkProps } from '../buttons/ctalink/ctalink';

export interface HeadlineBodyButtonProps {
  variant?: 'hero' | 'xxl' | 'xl' | 'large' | 'medium' | 'small' | 'base';
  titleVariant?: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children?: React.ReactNode;
  title: string;
  color?: string;
  buttonProps?: ButtonProps;
  buttonText?: string;
  buttonVariant?: 'medium' | 'small' | 'large';
  gridRowGap?: Array<string> | string;
  headlineBodyGridRowGap?: Array<string> | string;
  bodyVariant?: 'b0' | 'b1' | 'b2' | 'b3' | 'b4' | 'b5' | 'b6' | 'h5';
  bodyWidth?: Array<string> | string;
  titleWidth?: Array<string> | string;
  ctaLink?: boolean;
  ctaLinkProps?: CTALinkProps;
}

const StyledHeadlineBody = styled(HeadlineBody)`
  ${(props: HeadlineBodyProps) =>
    variant({
      variants: {
        hero: {
          '> *': {
            marginBottom: props.gridRowGap || '2rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        xxl: {
          '> *': {
            marginBottom: props.gridRowGap || '1rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        xl: {
          '> *': {
            marginBottom: props.gridRowGap || '0.75rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        large: {
          '> *': {
            marginBottom: props.gridRowGap || '0.75rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        medium: {
          '> *': {
            marginBottom: props.gridRowGap || '0.75rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        small: {
          '> *': {
            marginBottom: props.gridRowGap || '0.75rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        base: {
          '> *': {
            marginBottom: props.gridRowGap || '0.75rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
      },
    })};
`;

const StyledHeadlineBodyButton = styled.div`
  ${typography};
  ${color};
  ${space};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${(props: HeadlineBodyProps) =>
    variant({
      variants: {
        hero: {
          '> *': {
            marginBottom: props.gridRowGap || '2rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        xxl: {
          '> *': {
            marginBottom: props.gridRowGap || '1rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        xl: {
          '> *': {
            marginBottom: props.gridRowGap || '1rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        large: {
          '> *': {
            marginBottom: props.gridRowGap || '1rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        medium: {
          '> *': {
            marginBottom: props.gridRowGap || '1rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        small: {
          '> *': {
            marginBottom: props.gridRowGap || '1rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
        base: {
          '> *': {
            marginBottom: props.gridRowGap || '1.5rem',
          },
          '& :last-child': {
            marginBottom: '0rem',
          }
        },
      },
    })};
`;

export const HeadlineBodyButton = (props: HeadlineBodyButtonProps) => {
  return (
    <StyledHeadlineBodyButton {...props}>
      <StyledHeadlineBody
        title={props.title}
        variant={props.variant}
        color={props.color}
        gridRowGap={props.headlineBodyGridRowGap}
        bodyVariant={props.bodyVariant}
        titleVariant={props.titleVariant}
        bodyWidth={props.bodyWidth}
        titleWidth={props.titleWidth}
      >
        {props.children}
      </StyledHeadlineBody>
      {props.ctaLink ? (
        <CTALink variant="normal" {...props.ctaLinkProps}>
          {props.buttonText}
        </CTALink>
      ) : props.buttonText ? (
        <Button variant={props.buttonVariant} {...props.buttonProps}>
          {props.buttonText}
        </Button>
      ) : null}
    </StyledHeadlineBodyButton>
  );
};

HeadlineBodyButton.defaultProps = {
  variant: 'large',
  color: 'neutral.4',
  buttonVariant: 'small',
};

export default HeadlineBodyButton;
