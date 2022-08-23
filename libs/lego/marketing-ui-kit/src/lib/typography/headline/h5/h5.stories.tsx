/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import H5 from './h5';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: H5,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <H5 color={args.color}>{args.children}</H5>
);

export const h5 = Template.bind({});
h5.args = {
  children: "Let's make bank.",
  color: 'primary-green',
};
