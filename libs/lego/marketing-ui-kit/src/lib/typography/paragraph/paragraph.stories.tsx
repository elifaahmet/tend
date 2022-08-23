/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { B0, B1, B2, B3, B4, B5, B6 } from './index';

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  p {
    padding-bottom: 35px;
  }
`;

export default {
  component: Paragraphs,
  title: 'Typography/Paragraph',
};

export const allParagraphs = () => {
  const text = 'Management index funds.';

  return (
    <Paragraphs>
      <B0 color="neutral-black">{text}</B0>
      <B1 color="primary-red">{text}</B1>
      <B2 color="primary-green">{text}</B2>
      <B3 color="primary-orange">{text}</B3>
      <B4 color="primary-magenta">{text}</B4>
      <B5 color="secondary-neon-green">{text}</B5>
      <B6 color="secondary-green">{text}</B6>
    </Paragraphs>
  );
};
