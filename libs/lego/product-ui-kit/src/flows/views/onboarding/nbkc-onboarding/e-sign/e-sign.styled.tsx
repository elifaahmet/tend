/**@format */

import React from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';
import { themeStylesToCssString } from '../../../../../lib/typography/helpers';

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const CopyWrapper = styled.div`
  color: ${(props) => props.theme.colorScheme.primary.text};
  padding: ${(props) =>
      calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)}
    0;

  & {
    ol,
    ul {
      padding: ${(props) =>
        calculateWithUnit(props.theme.__spacer(16), 'rem', props.theme)};
      ${(props) => themeStylesToCssString(props.theme, 'legal')}
    }

    ol > li,
    ul > li {
      padding-block-end: ${(props) =>
        calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      padding: ${(props) =>
          calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)}
        0;
      ${(props) => themeStylesToCssString(props.theme, 'legal')}
      font-weight: 700;
    }

    p {
      padding: ${(props) =>
          calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)}
        0;
      ${(props) => themeStylesToCssString(props.theme, 'legal')}
    }
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  padding-inline-start: ${(props) =>
    calculateWithUnit(props.theme.__spacer(8), 'rem', props.theme)};
`;
