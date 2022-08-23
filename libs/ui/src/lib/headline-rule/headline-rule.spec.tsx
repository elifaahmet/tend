import React from 'react';
import { render } from '@testing-library/react';

import HeadlineRule from './headline-rule';

describe('HeadlineRule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HeadlineRule variant="h2">Variant h2</HeadlineRule>
    );
    expect(baseElement).toBeTruthy();
  });
});
