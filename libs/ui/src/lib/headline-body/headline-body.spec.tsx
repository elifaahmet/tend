import React from 'react';
import { render } from '@testing-library/react';

import HeadlineBody from './headline-body';

describe('HeadlineBody', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeadlineBody title="Headline" variant="large" />);
    expect(baseElement).toBeTruthy();
  });
});
