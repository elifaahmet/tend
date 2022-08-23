import React from 'react';
import { HeadlineButton } from './headline-button';

//@This type of component / story structure happens a lot. I feel like it would
// be better if we had the buttons in their own components rather than having them handled by things like
// "buttonProps."

export default {
  component: HeadlineButton,
  title: 'Mixed Text Components/HeadlineButton',
  argTypes: {
    Usage: {
      description: 'Headline Button',
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
    title: 'Generated from Storybook args',
    buttonText: 'Click me',
    onClick: () => { console.log('button clicked'); },
  }
  
};

export const primary = (args) => {

  return (
    <div style={{ display: 'flex', flexDirection: "column", gridRowGap: 20 }}>
      <HeadlineButton {...args} />
      <HeadlineButton
        variant="base"
        buttonText="small button"
        title="Base Title"
        buttonProps={{
          onClick: () => { console.log('base button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
      /> 
      <HeadlineButton
        variant="small"
        title="Small Title"
        buttonText="small button"
        buttonProps={{
          onClick: () => { console.log('small button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
      /> 
      <HeadlineButton
        variant="medium"
        title="Medium Title"
        buttonText="small button"
        buttonProps={{
          onClick: () => { console.log('medium button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
      /> 
      <HeadlineButton
        variant="large"
        title="Large Title"
        buttonText="small button"
        buttonProps={{
          onClick: () => { console.log('large button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
      /> 
      <HeadlineButton
        variant="xl"
        title="XLarge Title"
        buttonText="small button"
        buttonProps={{
          onClick: () => { console.log('xlarge button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
      /> 
      <HeadlineButton
        variant="xxl"
        title="XXLarge Title"
        buttonText="small button"
        buttonProps={{
          onClick: () => { console.log('xxlarge button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
      /> 
      <HeadlineButton
        variant="hero"
        title="Hero Title"
        buttonText="large button"
        buttonProps={{
          onClick: () => { console.log('hero button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
      /> 
    </div>
 );
};
