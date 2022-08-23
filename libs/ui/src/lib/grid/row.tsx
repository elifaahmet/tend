import React from 'react';
import styled, { css } from 'styled-components';
import { space, color } from 'styled-system';
import { getConfig, getDimensions } from './utils';

export interface RowProps {
  bg?: string | Array<string>;
  padding?: number | string;
  paddingTop?: string | Array<string>;
  marginTop?: string | Array<string>;
  paddingBottom?: string | Array<string>;
  paddingRight?: string | Array<string>;
  paddingLeft?: string | Array<string>;
  reverse?: boolean | Array<string>;
  align?: string | Record<string, unknown>;
  justify?: string | Record<string, unknown>;
  hide?: boolean | Array<string>;
  children?: React.ReactNode;
  noMargin?: boolean;
  debug?: boolean;
}

export const Row = styled.div<RowProps>`
  ${color}
  ${space}
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding-top: ${(props) => props.padding && `${props.padding}px`};
  padding-bottom: ${(props) => props.padding && `${props.padding}px`};

  ${(props) =>
    props.noMargin &&
    css`
      ${getDimensions(props).map(
        (dimension) =>
          getConfig(props).container[dimension] &&
          getConfig(props).media[dimension]`
      margin-left: -${getConfig(props).gutterWidth[dimension] / 2}rem;
      margin-right: -${getConfig(props).gutterWidth[dimension] / 2}rem;
    `
      )}
    `}

  ${(props) =>
    props.hide &&
    css`
      ${Array.isArray(props.hide)
        ? getDimensions(props).map(
            (dimension) =>
              getConfig(props).breakpoints[dimension] &&
              getConfig(props).media[dimension]`
         ${
           Array.isArray(props.hide) && props.hide.indexOf(dimension) !== -1
             ? `
             display: none;
             `
             : `
             display: flex;
               `
         };

      `
          )
        : `
        display: none;
          `}
    `}

  ${(props) =>
    props.hide &&
    css`
      ${Array.isArray(props.hide)
        ? getDimensions(props).map(
            (dimension) =>
              getConfig(props).breakpoints[dimension] &&
              getConfig(props).media[dimension]`
         ${
           Array.isArray(props.hide) && props.hide.indexOf(dimension) !== -1
             ? `
             display: none;
             `
             : `
             display: flex;
               `
         };

      `
          )
        : `
        display: none;
          `}
    `}

  ${(props) =>
    props.hide &&
    css`
      ${Array.isArray(props.hide)
        ? getDimensions(props).map(
            (dimension) =>
              getConfig(props).breakpoints[dimension] &&
              getConfig(props).media[dimension]`
         ${
           Array.isArray(props.hide) && props.hide.indexOf(dimension) !== -1
             ? `
             display: none;
             `
             : `
             display: flex;
               `
         };

      `
          )
        : `
        display: none;
          `}
    `}

  ${(props) =>
    props.reverse &&
    css`
      ${Array.isArray(props.reverse)
        ? getDimensions(props).map(
            (dimension) =>
              getConfig(props).breakpoints[dimension] &&
              getConfig(props).media[dimension]`
         ${
           Array.isArray(props.reverse) && props.reverse.indexOf(dimension) !== -1
             ? `
             flex-direction: row-reverse;
             flex-wrap: wrap-reverse;
             `
             : `
                 flex-direction: row;
                 flex-wrap: wrap;
               `
         };

      `
          )
        : `
            flex-direction: row-reverse;
            flex-wrap: wrap-reverse;
          `}
    `}

  ${(props) =>
    props.align &&
    css`
      ${typeof props.align === 'object'
        ? getDimensions(props).map(
            (dimension) =>
              getConfig(props).breakpoints[dimension] &&
              getConfig(props).media[dimension]`${props.align[dimension] && `align-items: ${props.align[dimension]}`}`
          )
        : `align-items: ${props.align};`}
    `}

  ${(props) =>
    props.justify &&
    css`
      ${typeof props.justify === 'object'
        ? getDimensions(props).map(
            (dimension) =>
              getConfig(props).breakpoints[dimension] &&
              getConfig(props).media[dimension]`${
                props.justify[dimension] && `justify-content: ${props.justify[dimension]}`
              }`
          )
        : `justify-content: ${props.justify};`}
    `}

  ${({ debug }) =>
    debug &&
    css`
      background-color: #5901ad40;
      outline: #fff solid 1px;
    `}
`;

Row.displayName = 'Row';

export default Row;
