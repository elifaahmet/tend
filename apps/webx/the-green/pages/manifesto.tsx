import React from 'react';
import { Layout } from '@tend/ui'
import Hero from '../components/manifesto/en-us/hero';
import Body from '../components/manifesto/en-us/body';
import Page from '../components/app/page';

const Main = () => {
  return (
    <Page title={'An Introduction To The Green'} description={'The financial industry, whose primary purpose is to serve as a middleman between borrowers and savers, has historically built relationships'}>
      <Layout bg="defaultGreen">
        <Hero
          headline="AN INTRODUCTION TO"
          subHeadline="THE GREEN"
          image="images/product-roadmap.png"
          leftCol={[2, 5]}
          rightCol={[4, 7]} />
        <Body />
      </Layout>
    </Page>
  )
};

export default Main;
