import React from 'react';
import { render } from '@testing-library/react';

import DownloadAppButton from './download-app-button';

describe('DownloadAppButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DownloadAppButton store="app store"/>);
    expect(baseElement).toBeTruthy();
  });
});
