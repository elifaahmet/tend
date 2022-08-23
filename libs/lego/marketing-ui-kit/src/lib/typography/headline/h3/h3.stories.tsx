/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import H3 from './h3';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: H3,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <H3 color={args.color}>{args.children}</H3>
);

export const h3 = Template.bind({});
h3.args = {
  children: "Let's make bank.",
  color: 'primary-green',
};
