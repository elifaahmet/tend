/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import H2 from './h2';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: H2,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <H2 color={args.color}>{args.children}</H2>
);

export const h2 = Template.bind({});
h2.args = {
  children: "Let's make bank.",
  color: 'primary-green',
};
