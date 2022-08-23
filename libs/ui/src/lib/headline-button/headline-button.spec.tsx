import React from 'react';
import { render } from '@testing-library/react';

import HeadlineButton from './headline-button';

describe('HeadlineButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HeadlineButton
        title="Test Title"
        buttonText="test button"
        buttonProps={{
          onClick: () => { console.log('test button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
