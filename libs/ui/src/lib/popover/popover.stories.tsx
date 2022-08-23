import React from 'react';
import { Popover, PopoverProps } from './popover';

//TODO Popover component seems like it could use some updating rather than fixing inside of this story.

export default {
  component: Popover,
  title: 'Popover',
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

export const primary = () => {
  /* eslint-disable-next-line */
  const props: PopoverProps = {};

  return <Popover />;
};
