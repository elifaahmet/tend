import React from 'react';
import { Layout } from '@tend/ui';
import styled from 'styled-components';

import { H2, Image, Paragraph } from '@tend/ui';
import usePrefixedWithBasePath from '../hooks/usePrefixedWithBasePath';
import Grid from '../components/layout/grid';
import RoadMap from '../components/modules/road-map';
import Page from '../components/app/page';
import {useTranslation} from "@tend/webx/utils/next-i18next";


const GridLayout = styled(Grid)`
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-row-gap: 3rem;
  padding: 2.8125rem 0;
  grid-template-areas:
    "HD  HD  HD  .   .   ."
    "BD  BD  BD  BD  BD  BD"
    "IMG IMG IMG IMG IMG IMG"
    "RM  RM  RM  RM  RM  RM";

  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-template-areas:
    "HD HD HD HD HD  .   .   .   .   .   .   ."
    "BD BD BD BD IMG IMG IMG IMG IMG IMG IMG IMG"
    "RM RM RM RM RM  RM  RM  RM  RM  RM  RM  RM";
  }
`;

const HeadlineContainer = styled.div`
  grid-area: HD;
`;

const RM = styled.div`
  grid-area: RM;
  padding: 2.8125rem 0;
`;

const BodyContainer = styled.div`
  grid-area: BD;
  align-self: start;
`;

const ImageContainer = styled.div`
  grid-area: IMG;
`;


const ProductRoadmap = () => {
  const { t } = useTranslation();
  const imageUrl = usePrefixedWithBasePath('/images/product-roadmap2.png');

  return (
    <Page title={t('Product Roadmap')} description={t('Product Roadmap')}>

      <Layout bg="defaultGreen">
        <GridLayout>
          <HeadlineContainer>
            <H2 color="white">{t('product-roadmap.title.first-line')}</H2>
            <H2 color="neonGreen.0">{t('product-roadmap.title.second-line')}</H2>
          </HeadlineContainer>
          <BodyContainer>
            <Paragraph
              color="white"
              variant="b2">
              {t('product-roadmap.body')}
          </Paragraph>
          </BodyContainer>
          <ImageContainer>
            <Image
              imgHeight={['100%']}
              imgWidth={['100%']}
              src={imageUrl}
            />
          </ImageContainer>
          <RM>
            <RoadMap />
          </RM>
        </GridLayout>
      </Layout>
    </Page>
  );
};

export default ProductRoadmap;
