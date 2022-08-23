import { render } from '@testing-library/react';

import SharedTestingLegoVisualRegression from './shared-testing-lego-visual-regression';

describe('SharedTestingLegoVisualRegression', () => {
  it('should render successfully', () => {
    const { baseElement } = render(< SharedTestingLegoVisualRegression />);
    expect(baseElement).toBeTruthy();
  });
});
