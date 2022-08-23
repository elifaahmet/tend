import React from 'react';
import { render } from '@testing-library/react';

import Image from './image';

describe('Image', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Image src="https://picsum.photos/100/100?key=6" />);
    expect(baseElement).toBeTruthy();
  });
});
