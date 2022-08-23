import React from 'react';
import { render } from '@testing-library/react';

import IconTextList from './icon-text-list';

describe('IconTextList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <IconTextList
      textList={[
        'Tend Visa debit card',
        'Secure place to deposit your cash',
        'Access to thousands of no-fee ATMs',
        'Easy peer-to-peer payments',
        'All the other stuff you’d expect from a bank built for the digital world. And then some.',
      ]}
    />
      );
    expect(baseElement).toBeTruthy();
  });
});
