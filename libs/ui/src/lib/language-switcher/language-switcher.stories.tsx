import React from 'react';
import { LanguageSwitcher } from './language-switcher';

export default {
  component: LanguageSwitcher,
  title: 'LanguageSwitcher',
  argTypes: {
    Usage: {
      description: '',
      table: {
        type: { 
            summary: '', 
            detail: '' 
        },
      },  
      control: {
        type: null,
      },
    },
    languages: {
      description: 'wedwefwef',  
      control: {
        type: 'select',
        options: ['en', 'es'],
      },
    },  
  },
  args: {
    color: '',
    onLanguageSelect: (language: string) => { console.log(language); },
    selected: 'en',
    languages: ["en", "es"],
  }
};

export const primary = (args) => {

  return (
    <LanguageSwitcher
      {...args} 
    />
  );
};