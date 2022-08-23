import React from 'react';
import { variant, layout } from 'styled-system'
import styled from 'styled-components';

import Paragraph from '../typography/paragraph/paragraph';
import H5 from '../typography/headlines/h5/h5';
import H4 from '../typography/headlines/h4/h4';
import H3 from '../typography/headlines/h3/h3';
import H2 from '../typography/headlines/h2/h2';
import H1 from '../typography/headlines/h1/h1';

export interface HeadlineBodyProps {
  variant?: 'hero'| 'xxl' | 'xl' | 'large' | 'medium' | 'small' | 'base',
  titleVariant?: 'hero' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
  children? : React.ReactNode,
  title: string,
  color?: string,
  bodyVariant?: 'b0' | 'b1' | 'b2' | 'b2l' | 'b3' | 'b4' | 'b5' | 'b6' | 'h5' ,
  gridRowGap?: Array<string> | string,
  bodyWidth?: Array<string> | string,
  titleWidth?: Array<string> | string,
}

const titlesMap = {
  hero: "hero",
  xxl: "h2",
  xl: "h3",
  large: "h4",
  medium: "b1",
  small: "b2",
  base: "b3",
};

const StyledDiv = styled.div<
  {
    width: Array<string> | string,
  }
>`
  ${layout}
  display: flex;
`;

const StyledHeadlineBody = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  ${(props: HeadlineBodyProps) => variant({
    variants: {
      xxl: {
        '> *': {
          marginBottom: props.gridRowGap || '1.5rem',
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
          marginBottom: props.gridRowGap || '0.5rem',
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
    }
  })};
`;

const renderHeadline = (titleVariant, title, color) => {
  if (titleVariant === "h5") {
    return (<H5 textTransform="none" color={color}>{title}</H5>);
  }
  if (titleVariant === "h4") {
    return (<H4 color={color}>{title}</H4>);
  }
  if (titleVariant === "h3") {
    return (<H3 color={color}>{title}</H3>);
  }
  if (titleVariant === "h2") {
    return (<H2 color={color}>{title}</H2>);
  }
  if (titleVariant === "h1") {
    return (<H1 color={color}>{title}</H1>);
  }
  if (titleVariant === "hero") {
    return (<H1 variant="hero" color={color}>{title}</H1>);
  }
};

export const HeadlineBody = (props: HeadlineBodyProps) => {
  const titleVariant = props.titleVariant || titlesMap[props.variant];
  return (
    <StyledHeadlineBody
      {...props}
    >
      <StyledDiv width={props.titleWidth}>
      {
        titleVariant.startsWith("b")
          ? <Paragraph
              variant={titleVariant}
              bold={props.variant !== "base"}
              color={props.color}
              marginTop="0rem"
            >
            {props.title}
          </Paragraph>
          : renderHeadline(titleVariant, props.title, props.color)
      }
      </StyledDiv>
      <StyledDiv width={props.bodyWidth}>
      {
        props.bodyVariant.startsWith("b")
          ? <Paragraph variant={props.bodyVariant} color={props.color} marginTop="0rem">
              {props.children}
            </Paragraph>
          : renderHeadline(props.bodyVariant, props.children, props.color)
      }
      </StyledDiv>
    </StyledHeadlineBody>
  );
};

HeadlineBody.defaultProps = {
  variant: 'large',
  color: 'neutral.4',
  bodyVariant: 'b3',
  titleWidth: '100%',
  bodyWidth: '100%',
};

export default HeadlineBody;
