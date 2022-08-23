import React from 'react';
import { Input } from './input';

export default {
  component: Input,
  title: 'Input',
  argTypes: {
    Usage: {
      description: 'Accepts user input.',
      table: {
        type: { 
            summary: 'Required Markup ', 
            detail: '<Input />',
        },
      },
      control: {
        placeholder: '',
        color: '',
        fontSize: '',
        borderBottomColor: '',
        bg: '',
        fontFamily: '',
        rule: true,
      },
    },
  },
  args: {
  }
  
};

export const primary = (args) => {

  return <Input {...args} />;
};
