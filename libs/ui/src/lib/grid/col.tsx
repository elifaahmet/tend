import React from 'react';
import styled, { css } from 'styled-components';
import { space } from 'styled-system';
import { getDimensions, getConfig } from './utils';

export interface ColProps {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  padding?: number | string;
  paddingRight?: string | Array<string>;
  paddingLeft?: string | Array<string>;
  paddingBottom?: string | Array<string>;
  paddingTop?: string | Array<string>;
  marginTop?: string | Array<string>;
  align?: string | Record<string, unknown>;
  justify?: string | Record<string, unknown>;
  offset?: number | Record<string, number>;
  reverse?: boolean | Array<string>;
  noGutter?: boolean;
  hide?: boolean | Array<string>;
  children?: React.ReactNode;
  debug?: boolean;
}

export const Col = styled.div<ColProps>`
  ${space}
  box-sizing: border-box;
  flex: 1 0 auto;
  max-width: 100%;
  display: ${(props) => (props.hide ? 'none' : 'flex')};
  flex-direction: column;
  padding-top: ${(props) => props.padding && `${props.padding}px`};
  padding-bottom: ${(props) => props.padding && `${props.padding}px`};

  ${(props) =>
    props.hide
      ? css`
          ${Array.isArray(props.hide)
            ? getDimensions(props).map(
                (dimension) =>
                  getConfig(props).breakpoints[dimension] &&
                  getConfig(props).media[dimension]`
        display: ${Array.isArray(props.hide) && props.hide.indexOf(dimension) !== -1 ? 'none' : 'flex'};
      `
              )
            : 'display: none;'}
        `
      : 'display:flex;'}

  ${(props) =>
    !props.noGutter &&
    css`
      ${getDimensions(props).map(
        (dimension) =>
          getConfig(props).breakpoints[dimension] &&
          getConfig(props).media[dimension]`
      padding-right: ${getConfig(props).gutterWidth[dimension] / 2}rem;
      padding-left: ${getConfig(props).gutterWidth[dimension] / 2}rem;
    `
      )}
    `}

  ${(props) => css`
    ${getDimensions(props).map(
      (dimension) =>
        props[dimension] &&
        getConfig(props).breakpoints[dimension] &&
        getConfig(props).media[dimension]`
      flex: 1 1 ${(props[dimension] / getConfig(props).columns[dimension]) * 100}%;
      max-width: ${(props[dimension] / getConfig(props).columns[dimension]) * 100}%;
    `
    )}
  `}

  ${(props) =>
    props.offset &&
    css`
      ${getDimensions(props).map(
        (dimension) =>
          getConfig(props).breakpoints[dimension] &&
          getConfig(props).media[dimension]`
    ${
      typeof props.offset === 'object'
        ? props.offset[dimension] !== undefined &&
          `margin-left: ${
            props.offset[dimension] > 0 ? (props.offset[dimension] / getConfig(props).columns[dimension]) * 100 : 0
          }%`
        : `margin-left: ${(props.offset / getConfig(props).columns['xs']) * 100}%`
    };
    `
      )}
    `}

  ${(props) =>
    props.reverse &&
    css`
      ${Array.isArray(props.reverse)
        ? getDimensions(props).map(
            (dimension) =>
              getConfig(props).breakpoints[dimension] &&
              getConfig(props).media[dimension]`
        flex-direction: ${
          Array.isArray(props.reverse) && props.reverse.indexOf(dimension) !== -1 ? 'column-reverse' : 'column'
        };
      `
          )
        : 'flex-direction: column-reverse;'}
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

export default Col;
