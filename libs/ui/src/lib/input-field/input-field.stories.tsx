import React from 'react';

import { InputField } from './input-field';

//@TODO this component doesn't allow input by default.
export default {
  component: InputField,
  title: 'Complex Components/InputField',
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
    label: 'Name',
    color: ''
  }
  
};

export const primary = (args) => {
//@TODO these components also have same issues regarding styling. Would be nice to do all of this with styled
  return (
    <div style={{ width: 320, background: "pink", display: 'flex', flexDirection: 'column', gridRowGap: 40, padding: 50 }}>
      <InputField
        {...args}
      />
    </div>
  );
};
