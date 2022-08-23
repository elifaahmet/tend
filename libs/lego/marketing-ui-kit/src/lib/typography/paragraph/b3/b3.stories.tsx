/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import B3 from './b3';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: B3,
  title: 'Typography/Paragraph',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <B3 color={args.color}>{args.children}</B3>
);

export const b3 = Template.bind({});
b3.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse.',
  color: 'black',
};
