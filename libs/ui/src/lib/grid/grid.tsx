import React from 'react';
import styled, { css } from 'styled-components';
import { color, space } from 'styled-system';
import { getConfig, getDimensions } from './utils';

export * from './row';
export * from './col';

export interface GridProps {
  fluid?: boolean;
  noPadding?: boolean;
  children?: React.ReactNode;
  debug?: boolean;
  bg?: string;
  padding?: number | string;
  paddingTop?: string | Array<string>;
  marginTop?: string | Array<string>;
  paddingBottom?: string | Array<string>;
  paddingRight?: string | Array<string>;
  paddingLeft?: string | Array<string>;
  align?: string | Record<string, unknown>;
  justify?: string | Record<string, unknown>;
}

export const Grid = styled.div<GridProps>`
  ${space}
  ${color}
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  box-sizing: border-box;

  ${(props) =>
    props.noPadding &&
    css`
      ${getDimensions(props).map(
        (dimension) =>
          getConfig(props).container[dimension] &&
          getConfig(props).media[dimension]`
      padding-left: ${!props.paddingLeft && getConfig(props).paddingWidth[dimension]}rem;
      padding-right: ${!props.paddingRight && getConfig(props).paddingWidth[dimension]}rem;
    `
      )}
    `}

  ${(props) =>
    !props.fluid &&
    css`
      ${getDimensions(props).map(
        (dimension) =>
          getConfig(props).container[dimension] &&
          getConfig(props).media[dimension]`
      ${
        typeof getConfig(props).container[dimension] === 'number'
          ? `width: ${getConfig(props).container[dimension]}rem;`
          : `width: 100%;`
      }
    `
      )}
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

export default Grid;
