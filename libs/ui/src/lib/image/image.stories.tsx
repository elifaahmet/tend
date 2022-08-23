import React from 'react';
import { Image } from './image';
import styled from 'styled-components';

//@TODO Component requires attention? not much control.

export default {
  component: Image,
  title: 'Image',
  argTypes: {
    Usage: {
      description: 'Image container',
      table: {
        type: { 
            summary: 'Required Markup', 
            detail: '<Image src="" />',
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    imgWidth: '',
    imgHeight: '',
    resizeMode: '',
    cache: false,
  }
  
};

const Grid = styled.div`
  height: 100%;
  margin: 50px 25px;
  padding: 5px 100px;
  display: grid;
  grid-gap: 20px;
  grid-auto-rows: 100px;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;

const random = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const primary = (args) => {
  const nonCachedLength = random(4, 12);
  const cachedLength = random(12, 24);

  return (
    <div>
      <h1>UI Image</h1>
      <Grid>
        {Array.from({ length: nonCachedLength }).map((_, k) => (
          <Image 
            src={`https://picsum.photos/100/100?key=${k}`}
            resizeMode={'cover'}
            imgWidth={args.imgWidth}
            imgHeight={args.imgHeight}
          />
        ))}
      </Grid>

      <h1>UI Image (Cached)</h1>
      <Grid>
        {Array.from({ length: cachedLength }).map((_, k) => (
          <Image cache={args.cache} src={`https://picsum.photos/100/100?key=${k}`} resizeMode={args.resizeMode} />
        ))}
      </Grid>
    </div>
  );
};
