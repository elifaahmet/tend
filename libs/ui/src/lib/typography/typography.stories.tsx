import React from 'react';
import { Typography } from './typography';
import { H1 } from './headlines/h1/h1';
import { H2 } from './headlines/h2/h2';
import { H3 } from './headlines/h3/h3';
import { H4 } from './headlines/h4/h4';
import { H5 } from './headlines/h5/h5';
import { H6 } from './headlines/h6/h6';

export default {
  component: Typography,
  title: 'Typography/Typography',
};

export const primary = () => {

  return (
    <div>
      <Typography><H3>This is H3.</H3></Typography>
      <H1 variant="hero">H0 Title</H1>
      <H1>This is H1.</H1>
      <H2>This is H2.</H2>
      <H3>This is H3.</H3>
      <H4>This is H4.</H4>
      <H5>This is H5.</H5>
      <H6>This is H6.</H6>
    </div>
  );
};
