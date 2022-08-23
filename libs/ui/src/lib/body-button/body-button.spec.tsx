import React from 'react';
import { render } from '@testing-library/react';

import BodyButton from './body-button';

describe('BodyButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BodyButton
        variant="small"
        buttonText="small button"
        buttonProps={{
          onClick: () => { console.log('small button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
      >
        This body button is variant small. This body button is variant small.
      </BodyButton>
    );
    expect(baseElement).toBeTruthy();
  });
});
