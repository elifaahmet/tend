import React from 'react';
import { Grid, Row } from '../grid/grid';
import { Counter, CounterProps } from './counter';

export default {
  component: Counter,
  title: 'Counter',
  argTypes: {
    Usage: {
      description: 'A counter.',
      table: {
        type: { 
            summary: 'Required markup', 
            detail: '<Counter min={} max={} slideTo="" alt="" />' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    min: 0,
    max: 50,
    slideTo: "max",
    alt: "This is a counter",
  }
  
};

export const primary = (args) => {
  /* eslint-disable-next-line */

  return (
    <Grid>
      <Row>
        <Counter {...args} />
      </Row>
    </Grid>
  );
};
