import React from 'react';
import { Label } from './label';

export default {
  component: Label,
  title: 'Typography/Label',
};

export const primary = () => {

  return (
    <div>
      <Label variant="l3">This is l3 label</Label>
      <Label variant="l3" bold>This is l3 label</Label>
      <Label variant="l4">This is l4 label</Label>
      <Label variant="l4" bold>This is l4 label</Label>
      <Label variant="l5">This is l5 label</Label>
      <Label variant="l5" bold>This is l5 label</Label>
      <Label variant="b3">This is b3 label</Label>
      <Label variant="b3" bold>This is b3 label</Label>
    </div>
  );

};
