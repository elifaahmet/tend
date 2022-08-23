import React from 'react';
import { Anchor } from './anchor';

export default {
  component: Anchor,
  title: 'Anchor',
  argTypes: {
    label: 'yellow',
  },
  args: {
    href: 'mailto:elif@gmail.com',
  }
};

export const primary = (args) => {

  return (
    <div style={{ background: '#002923' }}>
      <Anchor {...args}>Send email</Anchor>
    </div>
  )
};
