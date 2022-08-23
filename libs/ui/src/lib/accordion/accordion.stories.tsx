import React from 'react';
import { Accordion, AccordionItem } from './accordion';

export default {
  component: Accordion,
  title: 'Accordion',
};

export const primary = () => {
  /* eslint-disable-next-line */
  return (
    <div>
      <h1>Welcome to Accordion!</h1>
      <Accordion>
        <AccordionItem id={'1'} title={'Question 1?'}>
          <p>Hello</p>
        </AccordionItem>
        <AccordionItem id={'2'} title={'Question 2?'}>
          <p>Hello</p>
        </AccordionItem>
        <AccordionItem id={'3'} title={'Question 3?'}>
          <p>Hello</p>
        </AccordionItem>
        <AccordionItem id={'4'} title={'Question 4?'}>
          <p>Hello</p>
        </AccordionItem>
        <AccordionItem id={'5'} title={'Question 5?'}>
          <p>Hello</p>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
