import React from 'react';
import { render } from '@testing-library/react';

import TCarousel from './tcarousel';

describe('TCarousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TCarousel />);
    expect(baseElement).toBeTruthy();
  });
});
