import React from 'react';
import { render } from '@testing-library/react';

import IconHeadlineBody from './icon-headline-body';

describe('IconHeadlineBody', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <IconHeadlineBody layout="horizontal" variant="base" title="Base Title" color="magenta.0">
        This is base body of base IconHeadlineBody. This is base body of base IconHeadlineBody. This is base body of base IconHeadlineBody.
      </IconHeadlineBody>
    );
    expect(baseElement).toBeTruthy();
  });
});
