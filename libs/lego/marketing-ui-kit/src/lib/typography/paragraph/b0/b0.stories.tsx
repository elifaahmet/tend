/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import { TypographicTextProps } from '../../typography.types';
import B0 from './b0';

export default {
  component: B0,
  title: 'Typography/Paragraph',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <B0 color={args.color}>{args.children}</B0>
);

export const b0 = Template.bind({});
b0.args = {
  children: 'Management index funds.',
  color: 'black',
};
