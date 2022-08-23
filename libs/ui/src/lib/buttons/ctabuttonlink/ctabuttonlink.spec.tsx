import React from 'react';
import { render } from '@testing-library/react';

import CTAButtonLink from './ctabuttonlink';

describe('CTALink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CTAButtonLink href="#" />);
    expect(baseElement).toBeTruthy();
  });
});
