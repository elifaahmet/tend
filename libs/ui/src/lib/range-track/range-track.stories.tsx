import React from 'react';
import { RangeTrack } from './range-track'; //@TODO removed rangedProps, no need in storybook. Given args/argTypes

export default {
  component: RangeTrack,
  title: 'RangeTrack',
  argTypes: {
    Usage: {
      description: 'Ranged slider',
      table: {
        type: { 
            summary: 'Required markup', 
            detail: 'See source snippet above.' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    min: 0,
    max: 100,
    values: [25],
    step: 0.1,
    onValueChange: (values: Array<number>) => { console.log(values); },
    formatValue: (value: string) => { return `$${value}`; },
    question: 'Weenie dogs.',
  }
  
};

export const primary = (args) => {
  //
  // @TODO Things like this shouldn't need to happen anymore. These can be handled with {args}
  //
  // const props: RangeTrackProps = {
  //   min: 0,
  //   max: 100,
  //   values: [50],
  //   step: 0.1,
  //   onValueChange: (values: Array<number>) => { console.log(values); },
  //   formatValue: (value: string) => { return `$${value}`; },
  //   question: 'What what what what?',
  // };

  return (
    //@TODO  Styled components would be better, we can't easily control things like this in Storybook.
    <div style={{ paddingTop: '5rem', backgroundColor: 'pink', height: '50rem' }}>
      <RangeTrack {...args }/>
    </div>
  );
};
