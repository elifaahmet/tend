import React from 'react';
import { Box } from './box';

export default {
  component: Box,
  title: 'Box',
  argTypes: {
    Usage: {
      description: 'Simple box container.',
      table: {
        type: { 
            summary: 'Required Markup', 
            detail: '<Box bg=""> Content </Box>' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    bg: ['neutral.0', 'green.0', 'magenta.0'],
  }
};

export const primary = (args) => {

  return (
    <Box {...args}>
      Box Inside
    </Box>
  );
};
