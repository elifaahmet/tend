import React from 'react';
import { render } from '@testing-library/react';

import H1 from './h1';

describe('H1', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<H1 />);
    expect(baseElement).toBeTruthy();
  });
});
