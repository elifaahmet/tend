import React from 'react';
import { variant, color } from 'styled-system'
import styled from 'styled-components';

import Paragraph from '../typography/paragraph/paragraph';
import { Button, ButtonProps } from '../buttons/button/button';
import H4 from '../typography/headlines/h4/h4';
import H3 from '../typography/headlines/h3/h3';
import H2 from '../typography/headlines/h2/h2';
import H1 from '../typography/headlines/h1/h1';

interface HeadlineButtonProps {
  variant?: 'hero' |'xxl' | 'xl' | 'large' | 'medium' | 'small' | 'base',
  title: string;
  buttonText: string,
  buttonProps: ButtonProps,
  color?: string,
};

const titlesMap = {
  hero: "h1",
  xxl: "h1",
  xl: "h2",
  large: "h3",
  medium: "h4",
  small: "b1",
  base: "b2"
};

const buttonsMap = {
  hero: "large",
  xxl: "small",
  xl: "small",
  large: "small",
  medium: "small",
  small: "small",
  base: "small",
};

const StyledHeadlineButton = styled.div`
  ${color};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${variant({
    variants: {
      hero: {
        '> *': {
          marginBottom: '3.5rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
      xxl: {
        '> *': {
          marginBottom: '2.5rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
      xl: {
        '> *': {
          marginBottom: '2rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
      large: {
        '> *': {
          marginBottom: '1.5rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
      medium: {
        '> *': {
          marginBottom: '1.5rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
      small: {
        '> *': {
          marginBottom: '1.5rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
      base: {
        '> *': {
          marginBottom: '1rem',
        },
        '& :last-child': {
          marginBottom: '0rem',
        }
      },
    }
  })};
`;

const renderHeadline = (variant, title, color) => {
  if (variant === "medium") {
    return (<H4 color={color}>{title}</H4>);
  } else if (variant === "large") {
    return (<H3 color={color}>{title}</H3>);
  } else if (variant === "xl") {
    return (<H2 color={color}>{title}</H2>);
  } else if (variant === "xxl") {
    return (<H1 color={color}>{title}</H1>);
  } else if (variant === "hero") {
    return (<H1 variant="hero" color={color}>{title}</H1>);
  }
};

export const HeadlineButton = (props: HeadlineButtonProps) => {
  return (
    <StyledHeadlineButton
      {...props}
    >
      {
        titlesMap[props.variant].startsWith("b")
          ? <Paragraph
            variant={titlesMap[props.variant]}
            bold
            color={props.color}
          >
            {props.title}
          </Paragraph>
          : renderHeadline(props.variant, props.title, props.color)
      }
      {
        <Button variant={buttonsMap[props.variant]} {...props.buttonProps}>{props.buttonText}</Button>
      }
    </StyledHeadlineButton>
  );
};

HeadlineButton.defaultProps = {
  variant: 'base',
  color: 'neutral.4',
};

export default HeadlineButton;
