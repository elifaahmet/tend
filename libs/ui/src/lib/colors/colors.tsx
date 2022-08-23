import React from 'react';

import styled from 'styled-components';

import Box from '../box/box';

export interface ColorsProps {
  colors: Record<string, unknown>;
}

const Grid = styled.div`
  background-color: red;
  width: 100%;
  display: flex;
  flex-grow: 1;
`;

export const Colors = (props: ColorsProps) => {
  const entries = Object.entries(props);

  return (
    <div>
      <h1>UI Colors</h1>

      {entries.map((el) => {
        return (
          <div>
            <h1>{el[0]}</h1>
            <Grid>
              {Array.isArray(el[1]) ? (
                el[1].map((color) => {
                  return (
                    <Box flexGrow="1" bg={[color]}>
                      <p>{color}</p>
                    </Box>
                  );
                })
              ) : (
                <Box flexGrow="1" bg={[el[1]]}>
                  <p>{el[1]}</p>
                </Box>
              )}
            </Grid>
          </div>
        );
      })}
    </div>
  );
};

export default Colors;
