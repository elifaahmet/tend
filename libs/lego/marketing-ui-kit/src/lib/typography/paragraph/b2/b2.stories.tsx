/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import B2 from './b2';
import { TypographicTextProps } from '../../typography.types';

export default {
  component: B2,
  title: 'Typography/Paragraph',
} as Meta;

const Template: Story<TypographicTextProps> = (args) => (
  <B2 color={args.color}>{args.children}</B2>
);

export const b2 = Template.bind({});
b2.args = {
  children:
    'Management index funds improve consulting. Exchange traded funds stocks inverse.',
  color: 'black',
};
