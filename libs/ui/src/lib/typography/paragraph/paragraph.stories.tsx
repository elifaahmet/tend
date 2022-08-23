import React from 'react';
import { Paragraph } from './paragraph';

export default {
  component: Paragraph,
  title: 'Typography/Paragraph',
};

export const primary = () => {

  return (
    <div>
      <Paragraph variant="b0">This is b0 paragraph</Paragraph>
      <Paragraph variant="b0" bold={true}>This is b0 paragraph</Paragraph>
      <Paragraph variant="b1">This is b1 paragraph</Paragraph>
      <Paragraph variant="b1" bold>This is b1 paragraph</Paragraph>
      <Paragraph variant="b2">This is b2 paragraph</Paragraph>
      <Paragraph variant="b2" bold>This is b2 paragraph</Paragraph>
      <Paragraph variant="b3">This is b3 paragraph</Paragraph>
      <Paragraph variant="b3" bold>This is b3 paragraph</Paragraph>
      <Paragraph variant="b4">This is b4 paragraph</Paragraph>
      <Paragraph variant="b4" bold>This is b4 paragraph</Paragraph>
      <Paragraph variant="b5">This is b5 paragraph</Paragraph>
      <Paragraph variant="b5" bold>This is b5 paragraph</Paragraph>
      <Paragraph variant="b6">This is b6 paragraph</Paragraph>
      <Paragraph variant="b6" bold>This is b6 paragraph</Paragraph>
    </div>
  );
};
