import React from 'react';
import { render } from '@testing-library/react';

import Paragraph from './paragraph';

describe('Paragraph', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Paragraph variant="b0" />);
    expect(baseElement).toBeTruthy();
  });
});
