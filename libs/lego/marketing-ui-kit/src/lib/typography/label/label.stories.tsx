/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { L3, L4, L5 } from './';

const Label = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  label {
    padding-bottom: 35px;
  }
`;

export default {
  component: Label,
  title: 'Typography/Labels',
};

export const allLabels = () => {
  const text =
    'Management index funds improve consulting. Exchange traded funds stocks inverse market exposure.';

  return (
    <Label>
      <L3 color="primary-green">{text}</L3>
      <L3 bold color="primary-green">
        {text}
      </L3>
      <L4 color="primary-orange">{text}</L4>
      <L4 bold color="primary-orange">
        {text}
      </L4>
      <L5 color="primary-magenta">{text}</L5>
      <L5 bold color="primary-magenta">
        {text}
      </L5>
    </Label>
  );
};
