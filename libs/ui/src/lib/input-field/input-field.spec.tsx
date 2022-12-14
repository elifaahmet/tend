import React from 'react';
import { render } from '@testing-library/react';

import InputField from './input-field';

describe('InputField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <InputField
        name="name"
        id="name"
        label="Name"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
