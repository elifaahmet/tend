import React from 'react';
import { Layout, LayoutProps } from './layout';

export default {
  component: Layout,
  title: 'Layout',
};

export const primary = () => {
  /* eslint-disable-next-line */
  // const props: LayoutProps = {};

  return (
    <Layout>
      <p>Layout</p>
    </Layout>
  );
};
