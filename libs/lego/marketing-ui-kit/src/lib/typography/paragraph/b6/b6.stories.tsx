/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import B6 from './b6';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: B6,
  title: 'Typography/Paragraph',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <B6 color={args.color}>{args.children}</B6>
);

export const b6 = Template.bind({});
b6.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse.',
  color: 'black',
};
