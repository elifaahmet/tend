import React from 'react';
import { Rectangle } from './rectangle';

export default {
  component: Rectangle,
  title: 'Rectangle',
};

export const primary = () => {

  return (
    <div>
      <Rectangle type="left" rectangleColor="magenta.0" />
      <div style={{ height: 200, width: 180 }}>
        <Rectangle type="vertical" rectangleColor="magenta.0" />
      </div>
    </div>
  );
};
