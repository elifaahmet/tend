import React from 'react';
import { render } from '@testing-library/react';

import Colors from './colors';
import theme from '../theme';

const { colors } = theme;

describe('Colors', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Colors colors={colors} />
    );
    expect(baseElement).toBeTruthy();
  });
});
