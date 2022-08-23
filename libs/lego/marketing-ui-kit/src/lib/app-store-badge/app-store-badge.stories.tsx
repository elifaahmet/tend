/** @format */

import React from 'react';
import { Story, Meta } from '@storybook/react';
import styled from '@emotion/styled';

import { AppStoreBadge, AppStoreBadgeProps } from './app-store-badge';
import englishApplePng from '../../../public/english-apple.png';
import englishGooglePng from '../../../public/english-google.png';

export default {
  component: AppStoreBadge,
  title: 'App Store Badge',
} as Meta;

const StyledDiv = styled.div`
  max-width: 40%;
`;

const Template: Story<AppStoreBadgeProps> = (args) => (
  <StyledDiv>
    <AppStoreBadge {...args} />
  </StyledDiv>
);

export const appleStoreBadge = Template.bind({});
appleStoreBadge.args = {
  src: englishApplePng,
  href: 'https://apps.apple.com/us/app/tend-money/id1554963043',
};

export const googlePlayBadge = Template.bind({});
googlePlayBadge.args = {
  src: englishGooglePng,
  href: 'https://play.google.com/store/apps/details?id=money.tend.app',
};
