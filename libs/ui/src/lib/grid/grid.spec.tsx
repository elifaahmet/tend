import React from 'react';
import { render } from '@testing-library/react';

import Grid from './grid';

describe('Grid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Grid fluid bg={'green.0'}> 
      </Grid>
    );
    expect(baseElement).toBeTruthy();
  });
});
