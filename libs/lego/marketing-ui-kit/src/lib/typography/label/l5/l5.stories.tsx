/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import L5 from './l5';
import { LabelProps } from '../../typography.types';

export default {
  component: L5,
  title: 'Typography/Labels',
} as Meta;

const Template: Story<LabelProps> = (args) => (
  <L5 color={args.color} bold={args.bold}>
    {args.children}
  </L5>
);

export const l5 = Template.bind({});
l5.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse market exposure.',
  color: 'neutral-black',
};

export const l5Bold = Template.bind({});
l5Bold.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse market exposure.',
  color: 'neutral-black',
  bold: true,
};
