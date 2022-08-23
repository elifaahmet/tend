import React from 'react';
import { render } from '@testing-library/react';

import LanguageSwitcher from './language-switcher';

describe('LanguageSwitcher', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <LanguageSwitcher
        color="black"
        languages={["en", "es"]}
        onLanguageSelect={(language: string) => { console.log(language); }}
        selected="en"
      />
    );
    expect(baseElement).toBeTruthy();
  });
});