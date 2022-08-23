/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import LegoMarketingUiKit from './lego-marketing-ui-kit';

export default {
  component: LegoMarketingUiKit,
  title: 'LegoMarketingUiKit',
} as Meta;

const Template: Story = (args) => <LegoMarketingUiKit />;

export const primary = Template.bind({});
