import React from 'react';

import styled from 'styled-components';
import { border, color, space, layout } from 'styled-system';

export interface RectangleProps {
  rectangleColor?: string | Array<string>,
  type?: 'vertical' | 'left' | 'right',
  width?: string | Array<string>,
  height?: string | Array<string>,
  marginTop?: string | Array<string>,
  marginBottom?: string | Array<string>,
};

const rectangleMarginArray = [1.5, 1.5, 2.25, 3];

const rectangleBorderWidthArray = ['0.5rem', '0.5rem', '0.75rem', '1rem'];

const StyledRectangle = styled.hr<RectangleProps>`
  ${color};
  ${border};
  ${space};
  ${layout};
  border-width: 0;
`;

const leftProps = (props: RectangleProps) => ({
  width: '100%',
  height: rectangleBorderWidthArray,
  bg: props.rectangleColor,
  marginTop: props.marginTop || rectangleMarginArray.map(rem => `${rem}rem`),
  marginBottom: props.marginBottom || rectangleMarginArray.map(rem => `${rem * 2}rem`),
  type: props.type,
});

const rightProps = (props: RectangleProps) => ({
  width: '100%',
  height: rectangleBorderWidthArray,
  bg: props.rectangleColor,
  marginTop: props.marginTop || rectangleMarginArray.map(rem => `${rem}rem`),
  marginBottom: props.marginBottom || rectangleMarginArray.map(rem => `${rem * 2}rem`),
  type: props.type,
});

const verticalProps = (props: RectangleProps) => ({
  width: rectangleBorderWidthArray,
  height: props.height || '100%',
  bg: props.rectangleColor,
  marginTop: props.marginTop || '0rem',
  marginBottom: props.marginBottom || '0rem',
  type: props.type,
});


export const Rectangle = (props: RectangleProps) => {

  const propsMap = {
    left: leftProps(props),
    right: rightProps(props),
    vertical: verticalProps(props),
  }
  return (
    <StyledRectangle
      {...(propsMap[props.type])}
    />
  );
};

Rectangle.defaultProps = {
  rectangleColor: 'neutral.4',
};

export default Rectangle;
