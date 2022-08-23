/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import H4 from './h4';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: H4,
  title: 'Typography/Headlines',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <H4 color={args.color}>{args.children}</H4>
);

export const h4 = Template.bind({});
h4.args = {
  children: "Let's make bank.",
  color: 'primary-green',
};
