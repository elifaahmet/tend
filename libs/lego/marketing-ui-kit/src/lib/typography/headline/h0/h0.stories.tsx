/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import H0 from './h0';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: H0,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <H0 color={args.color}>{args.children}</H0>
);

export const h0 = Template.bind({});
h0.args = {
  children: "Let's make bank.",
  color: 'primary-green',
};
