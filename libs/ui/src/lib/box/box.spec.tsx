import React from 'react';
import { render } from '@testing-library/react';

import Box from './box';

describe('Box', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Box bg={['neutral.0', 'green.0', 'magenta.0']}>
        Box Inside
      </Box>
    );
    expect(baseElement).toBeTruthy();
  });
});
