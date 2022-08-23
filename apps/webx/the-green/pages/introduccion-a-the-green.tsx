import React from 'react';
import { Layout } from '@tend/ui'
import Hero from '../components/manifesto/es-mx/hero';
import Body from '../components/manifesto/es-mx/body';
import Page from '../components/app/page';

const Main = () => {
  return (
    <Page title={'Introducción a The Green'} description={'El objetivo principal del sector financiero es servir de intermediario entre solicitantes de préstamos y ahorradores, e históricamente ha establecido relaciones como asesor y proveedor de capital de manera descendente.'}>
      <Layout bg="defaultGreen">
        <Hero
          headline="Introducción a"
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
