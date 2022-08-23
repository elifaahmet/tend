import React from 'react';
import { render } from '@testing-library/react';

import Rectangle from './rectangle';

describe('Rectangle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rectangle />);
    expect(baseElement).toBeTruthy();
  });
});
