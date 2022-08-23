import React from 'react';
import { render } from '@testing-library/react';

import Icon from './icon';

describe('Icon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Icon iconName="Plus" fontWeight={1} color="neutral.4" />);
    expect(baseElement).toBeTruthy();
  });
});
