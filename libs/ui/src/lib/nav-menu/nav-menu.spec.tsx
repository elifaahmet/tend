import React from 'react';
import { render } from '@testing-library/react';

import NavMenu from './nav-menu';

describe('NavMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
    <NavMenu
      href="/"
      prefetch={false}
      color="black"
      label="test test"
    />);
    expect(baseElement).toBeTruthy();
  });
});
