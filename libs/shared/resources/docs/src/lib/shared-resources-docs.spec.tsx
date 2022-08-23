import { render } from '@testing-library/react';

import SharedResourcesDocs from './shared-resources-docs';

describe('SharedResourcesDocs', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< SharedResourcesDocs />);
    expect(baseElement).toBeTruthy();
  });
});
