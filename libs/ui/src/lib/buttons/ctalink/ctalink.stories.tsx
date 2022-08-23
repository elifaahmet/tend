import React from 'react';
import { CTALink } from './ctalink';

export default {
  component: CTALink,
  title: 'Buttons/CTALink',
  argTypes: {
    Usage: {
      description: 'CTA-Link',
      table: {
        type: { 
            summary: 'Required markup',  //@@TODO really need to be able to control button text.
            detail: '<CTALink href="" />',
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    href: 'mailto:elifaahmet@gmail.com',
    variant: 'normal',
  }
  
};

export const primary = (args) => {


  return  (
    <div style={{ backgroundColor: "lightpink", justifyContent: "center", alignItems: "center", padding: '3% 50%'}}>
      <CTALink {...args}>Large Button</CTALink>
      <CTALink {...args} >Med Button</CTALink>
    </div>
  );
};
