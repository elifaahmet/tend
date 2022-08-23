import React from 'react';
import { HeadlineBodyButton } from './headline-body-button';

//@TODO Seems props on component have default values being forced.

export default {
  component: HeadlineBodyButton,
  title: 'Mixed Text Components/HeadlineBodyButton',
  argTypes: {
    Usage: {
      description: 'Headline body button',
      table: {
        type: { 
            summary: 'Required markup', 
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

  return (
    //@TODO No need for inline styling inside of storybook when we have styled
    <div style={{ width: '40%', display: 'flex', flexDirection: 'column', gridRowGap: 20 }}>
      <HeadlineBodyButton {...args} >
        Text text more text and more, and more. and then some more.
      </HeadlineBodyButton>
    </div>
  );
};
