import React from 'react';
import { NavMenu } from './nav-menu';

export default {
  component: NavMenu,
  title: 'NavMenu',
  argTypes: {
    Usage: {
      description: '',
      table: {
        type: { 
            summary: '', 
            detail: '' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    x: '',
  }
  
};

export const primary = (args) => {
  return (
    <NavMenu
      href="/"
      prefetch={false}
      color="black"
      label="test test"
    />
  );
};