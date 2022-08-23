/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import L4 from './l4';
import { LabelProps } from '../../typography.types';

export default {
  component: L4,
  title: 'Typography/Labels',
} as Meta;

const Template: Story<LabelProps> = (args) => (
  <L4 color={args.color} bold={args.bold}>
    {args.children}
  </L4>
);

export const l4 = Template.bind({});
l4.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse market exposure.',
  color: 'neutral-black',
};

export const l4Bold = Template.bind({});
l4Bold.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse market exposure.',
  color: 'neutral-black',
  bold: true,
};
