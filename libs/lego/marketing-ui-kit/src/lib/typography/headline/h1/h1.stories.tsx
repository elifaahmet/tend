/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import H1 from './h1';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: H1,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <H1 color={args.color}>{args.children}</H1>
);

export const h1 = Template.bind({});
h1.args = {
  children: "Let's make bank.",
  color: 'primary-green',
};
