import React from 'react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Buttons/Button',
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
  }
  
};

export const primary = (args) => {
  //@TODO these buttons texts aren't generated from props. Should ahve more control by doing so


  return (
    <div>
      <div style={{ backgroundColor: "lightpink", justifyContent: "center", alignItems: "center", padding: '3% 50%'}}>
      <Button {...args} >Large Button</Button>

        <Button variant="large" colorBg >Large Button</Button>
      </div>
    </div>
  );
};
