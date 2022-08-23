/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import B4 from './b4';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: B4,
  title: 'Typography/Paragraph',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <B4 color={args.color}>{args.children}</B4>
);

export const b4 = Template.bind({});
b4.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse.',
  color: 'black',
};
