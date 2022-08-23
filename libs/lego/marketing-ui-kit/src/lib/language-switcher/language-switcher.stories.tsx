/** @format */

import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { LanguageSwitcher, LanguageSwitcherProps } from './language-switcher';

export default {
  component: LanguageSwitcher,
  title: 'LanguageSwitcher',
} as Meta;

const Template: Story = (args) => {
  const [selected, setSelected] = useState(args.languages[0]);

  return (
    <LanguageSwitcher
      color={args.color}
      languages={args.languages}
      selected={selected}
      onLanguageSelect={(language: string) => {
        setSelected(language);
      }}
    />
  );
};

export const languageSwitcher = Template.bind({});

languageSwitcher.args = {
  color: 'neutral-black',
  languages: ['en', 'es'],
};
