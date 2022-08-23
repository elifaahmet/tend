import React from 'react';
import { render } from '@testing-library/react';

import TLayout from './tlayout';

describe('TLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TLayout variant="center" />);
    expect(baseElement).toBeTruthy();
  });
});
