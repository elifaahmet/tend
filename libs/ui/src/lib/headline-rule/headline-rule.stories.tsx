import React from 'react';
import { HeadlineRule } from './headline-rule';

export default {
  component: HeadlineRule,
  title: 'Basic Components/HeadlineRule',
};

export const primary = () => {

  return <HeadlineRule variant="h2">Variant h2</HeadlineRule>;
};
