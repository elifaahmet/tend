import React from 'react';
import { Logo } from './logo';

export default {
  component: Logo,
  title: 'Logo',
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
    svgWidth: String,
    color: String,
    variant: 'normal',
  }
  
};

export const primary = (args) => {

  return (
    <div>
      <h2>Logo</h2>
      <ul>
        <li>
          <Logo {...args} />
        </li>
      </ul>
    </div>
  );
};
