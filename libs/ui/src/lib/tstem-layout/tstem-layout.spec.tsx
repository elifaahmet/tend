import React from 'react';
import { render } from '@testing-library/react';

import TStemLayout from './tstem-layout';

describe('TStemLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TStemLayout />);
    expect(baseElement).toBeTruthy();
  });
});
