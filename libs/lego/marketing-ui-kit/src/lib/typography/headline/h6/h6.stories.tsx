/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import H6 from './h6';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: H6,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <H6 color={args.color}>{args.children}</H6>
);

export const h6 = Template.bind({});
h6.args = {
  children: "Let's make bank.",
  color: 'primary-green',
};
