/**@format */

import React, { LabelHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { calculateWithUnit } from '@tend/shared/design/ui-kit';
import { themeStylesToCssString } from '@tend/lego/product-ui-kit';

export const FileUploadWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & {
    p {
      color: ${(props) => props.theme.colorScheme.primary.text};
      ${(props) => themeStylesToCssString(props.theme, 'caption')}
    }
  }
`;

export const FileUploadInput = styled.input`
  height: 0;
  width: 0;
`;

export const FileUploadLabelButton = styled.label<
  LabelHTMLAttributes<HTMLLabelElement>
>`
  display: flex;
  height: ${(props) => calculateWithUnit(65, 'rem', props.theme)};
  width: ${(props) => calculateWithUnit(65, 'rem', props.theme)};
  justify-content: center;
  align-items: center;
  border: ${(props) => calculateWithUnit(1, 'rem', props.theme)} dashed
    ${(props) => props.theme.color['neutral-off-white']};
`;
