import React from 'react';
import { Textarea, TextareaProps } from './textarea';

export default {
  component: Textarea,
  title: 'Textarea',
  argTypes: {
    Usage: {
      description: 'A simple Text area / container',
      table: {
        type: { 
            summary: 'Required markup', 
            detail: '<Textarea> Content </Textarea>' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
  }
};

export const primary = (args) => {

  return <Textarea {...args} />;
};
