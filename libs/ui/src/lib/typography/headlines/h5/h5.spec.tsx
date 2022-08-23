import React from 'react';
import { render } from '@testing-library/react';

import H5 from './h5';

describe('H5', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<H5 />);
    expect(baseElement).toBeTruthy();
  });
});
