import React from 'react';
import { render } from '@testing-library/react';

import RangeTrack from './range-track';

describe('RangeTrack', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RangeTrack />);
    expect(baseElement).toBeTruthy();
  });
});
