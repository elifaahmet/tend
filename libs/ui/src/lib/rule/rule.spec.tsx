import React from 'react';
import { render } from '@testing-library/react';

import Rule from './rule';

describe('Rule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rule size={2} ruleColor="magenta.0" />);
    expect(baseElement).toBeTruthy();
  });
});
