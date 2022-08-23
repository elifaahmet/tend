import React from 'react';
import { IconTextList } from './icon-text-list';

export default {
  component: IconTextList,
  title: 'IconTextList',
  argTypes: {
    Usage: {
      description: 'Icon text list',
      table: {
        type: { 
            summary: 'Required markup', 
            detail: '<IconTextList textList={["data-1", "data-2" ...]} />' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    textList: [
      'Tend Visa debit card',
      'Secure place to deposit your cash',
      'Access to thousands of no-fee ATMs',
      'Easy peer-to-peer payments',
      'All the other stuff you’d expect from a bank built for the digital world. And then some.',
                ]
  }
  
};

export const primary = (args) => {

  return (
    <IconTextList
      {...args}
    />
  );
};
