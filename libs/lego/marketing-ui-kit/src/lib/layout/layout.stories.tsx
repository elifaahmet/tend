import React from 'react';
import { Layout } from './layout';

export default {
  component: Layout,
  title: 'Layout',
};

export const layout = () => {
  return (
    <Layout backgroundColor="primary-magenta">
      <p>Layout</p>
    </Layout>
  );
};

export const layoutFullWidthOnMobile = () => {
  return (
    <Layout fullWidth={['xs']} backgroundColor="primary-yellow">
      <p>Layout</p>
    </Layout>
  );
};

export const layoutFullWidthOnTablet = () => {
  return (
    <Layout fullWidth={['xs', 's', 'm']} backgroundColor="primary-green">
      <p>Layout</p>
    </Layout>
  );
};
