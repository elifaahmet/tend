import React from 'react';
import { render } from '@testing-library/react';

import H6 from './h6';

describe('H6', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<H6 />);
    expect(baseElement).toBeTruthy();
  });
});
