import React from 'react';
import { CTAButtonLink } from './ctabuttonlink';

export default {
  component: CTAButtonLink,
  title: 'Buttons/CTAButtonLink',
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

//@TODO Inline styling and uncontrollable button text.
  return  (
    <div style={{ backgroundColor: "lightpink", display: "flex", justifyContent: "center", alignItems: "center", padding: '3%'}}>
      <CTAButtonLink {...args} >Large Button</CTAButtonLink>
    </div>
  );
};
