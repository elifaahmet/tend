/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import B5 from './b5';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: B5,
  title: 'Typography/Paragraph',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <B5 color={args.color}>{args.children}</B5>
);

export const b5 = Template.bind({});
b5.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse.',
  color: 'black',
};
