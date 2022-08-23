import React from 'react';
import { render } from '@testing-library/react';

import HeadlineBodyButton from './headline-body-button';

describe('HeadlineBodyButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HeadlineBodyButton variant="base" title="Base Title" color="magenta.0" buttonText="small button">
        This is base body of base HeadlineBodyButton. This is base body of base HeadlineBodyButton. This is base body of base HeadlineBodyButton.
      </HeadlineBodyButton>
    );
    expect(baseElement).toBeTruthy();
  });
});
