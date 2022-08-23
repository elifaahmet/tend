import React from 'react';
import { Colors, ColorsProps } from './colors';

import theme from '../theme';

export default {
  component: Colors,
  title: 'Colors',
};

export const primary = () => {
  const { colors } = theme;
  const props: ColorsProps = {
    colors,
  };

  return <Colors {...colors} />;
};
