import React from 'react';
import { render } from '@testing-library/react';

import SocialMediaLink from './social-media-link';

describe('SocialMediaLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SocialMediaLink name="Facebook" />);
    expect(baseElement).toBeTruthy();
  });
});
