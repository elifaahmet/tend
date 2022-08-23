/**@format */
import styled from '@emotion/styled';
import React from 'react';

import { calculateWithUnit } from '@tend/shared/design/ui-kit';

export const ListWrapper = styled.div<{
  isHeaderHidden: boolean;
  isListScrollable: boolean;
}>`
  display: flex;
  overflow-y: ${(props) => (props.isListScrollable ? 'auto' : 'visible')};
  margin-inline-start: -${(props) => calculateWithUnit(props.theme.offset, 'rem', props.theme)};
  padding-block-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(9), 'rem', props.theme)};
  flex-direction: column;

  .header {
    display: flex;
    padding-inline-start: ${(props) =>
      calculateWithUnit(props.theme.offset, 'rem', props.theme)};
    padding-inline-end: ${(props) =>
      calculateWithUnit(props.theme.offset, 'rem', props.theme)};
    flex-direction: row;
    width: 100%;
    padding-block-start: ${(props) =>
      calculateWithUnit(props.theme.__spacer(6), 'rem', props.theme)};
    padding-block-end: ${(props) =>
      calculateWithUnit(props.theme.__spacer(6), 'rem', props.theme)};
    display: ${(props) => (props.isHeaderHidden ? 'none' : '')};

    & {
      .title {
        display: flex;
        margin-inline-end: auto;
        align-items: center;
        text-transform: uppercase;
      }
      .action-wrapper {
        display: flex;
        padding-inline-start: ${(props) =>
          calculateWithUnit(props.theme.__spacer(4), 'rem', props.theme)};
        margin-inline-start: auto;
        align-items: center;

        h2 {
          color: ${(props) => props.theme.color[props.color]};
        }

        button {
          background: none;
          text-transform: uppercase;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
        }
      }
    }
  }

  .items {
    & > div {
      padding-inline-start: ${(props) =>
        calculateWithUnit(props.theme.offset, 'rem', props.theme)};
      padding-inline-end: ${(props) =>
        calculateWithUnit(props.theme.offset, 'rem', props.theme)};
      border-bottom: ${(props) =>
        `${calculateWithUnit(3, 'rem', props.theme)} solid ${
          props.theme.colorScheme.secondary.brand
        }`};
    }
  }
`;
