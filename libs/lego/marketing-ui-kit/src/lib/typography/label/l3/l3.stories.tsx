/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import L3 from './l3';
import { LabelProps } from '../../typography.types';

export default {
  component: L3,
  title: 'Typography/Labels',
} as Meta;

const Template: Story<LabelProps> = (args) => (
  <L3 color={args.color} bold={args.bold}>
    {args.children}
  </L3>
);

export const l3 = Template.bind({});
l3.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse market exposure.',
  color: 'neutral-black',
};

export const l3Bold = Template.bind({});
l3Bold.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse market exposure.',
  color: 'neutral-black',
  bold: true,
};
