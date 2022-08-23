/** @format */

import React from 'react';
import styled from '@emotion/styled';
import { H0, H1, H2, H3, H4, H5, H6 } from './';

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-bottom: 35px;
  }
`;

export default {
  component: Headline,
  title: 'Typography/Headlines',
};

export const allHeadlines = () => {
  const text = 'Tend';

  return (
    <Headline>
      <H0 color="neutral-black">{text}</H0>
      <H1 color="primary-red">{text}</H1>
      <H2 color="primary-green">{text}</H2>
      <H3 color="primary-orange">{text}</H3>
      <H4 color="primary-magenta">{text}</H4>
      <H5 color="secondary-neon-green">{text}</H5>
      <H6 color="secondary-green">{text}</H6>
    </Headline>
  );
};
