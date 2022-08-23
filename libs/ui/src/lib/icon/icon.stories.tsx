import React from 'react';
import { Icon } from './icon';
import theme from '../theme';
import styled from 'styled-components';
import Box from '../box/box';

const Grid = styled.div`
  height: 100%;
  margin: 50px 25px;
  padding: 5px 100px;
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: 100px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

export default {
  component: Icon,
  title: 'Icon',
  argTypes: {
    Usage: {
      description: 'Curren Icons',
      table: {
        type: { 
            summary: 'Required markup', 
            detail: '<Icon fontSize={} iconName="" fontWeight={} color="" />' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    color: 'black',
    fontSize: '2rem',
    fontWeight: 1,
  },  
};

export const primary = (args) => {
  const { icons } = theme;
  const iconKeys = Object.keys(icons);

  return (
    <div>
      <h1>UI Icons</h1>

      <Grid>
        {iconKeys.map((key) => (
          <Box bg={['neutral.0']} flexGrow="1">
            <>
              <Icon fontSize={args.fontSize} iconName={key} fontWeight={args.fontWeight} color={args.color} />
              <p>{key}</p>
            </>
          </Box>
        ))}
      </Grid>
    </div>
  );
};
