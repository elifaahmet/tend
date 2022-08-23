import React from 'react';
import { render } from '@testing-library/react';

import HeadlineRuleBodyButton from './headline-rule-body-button';

describe('HeadlineRuleBodyButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <HeadlineRuleBodyButton
        buttonText="small button"
        buttonProps={{
          onClick: () => { console.log('small button clicked'); },
          bg: 'magenta.0',
          color: 'neutral.4',
        }}
        variant="h5"
        title="Headline Rule"
      >
        This is the example of Headline Rule Body Button.
      </HeadlineRuleBodyButton>
    );
    expect(baseElement).toBeTruthy();
  });
});
