import React from 'react';
import { Rule } from './rule';
import styled from 'styled-components';

export default {
  component: Rule,
  title: 'Rule',
  argTypes: {
    Usage: {
      description: 'A simple rule.',
      table: {
        type: { 
            summary: 'Required markup', 
            detail: '<Rule size={} ruleColor="">' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    size: 8,
    ruleColor: 'defaultRed',
  }
};

const GridContainer = styled.div`
  display: grid;
  padding-top: 10%;
`;

export const primary = (args) => {
  
  return (
    <GridContainer>
      <Rule {...args} />
    </GridContainer>
  );
};

