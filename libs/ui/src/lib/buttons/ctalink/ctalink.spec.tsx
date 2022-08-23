import React from 'react';
import { render } from '@testing-library/react';

import CTALink from './ctalink';

describe('CTALink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CTALink />);
    expect(baseElement).toBeTruthy();
  });
});
