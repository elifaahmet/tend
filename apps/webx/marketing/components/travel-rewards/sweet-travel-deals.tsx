/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Layout, Grid, Row, H1, H5 } from '@tend/ui';

export const SweetTravelDeals = () => {
  const { t } = useTranslation('travel-rewards');
  return (
    <Layout
      bg="defaultGreen"
      backgroundImage="url('/images/common/enUS/green-palm-background-texture.jpeg')"
    >
      <Grid paddingTop={['5.5625rem']} paddingBottom={['5.5625rem']}>
        <Row paddingBottom={['5.5625rem']}>
          <H1 color="white">{t('sweet-travel-deals.headline')}</H1>
        </Row>
        <Row paddingBottom={['5.5625rem']}>
          <H5 color="white">{t('sweet-travel-deals.body')}</H5>
        </Row>
      </Grid>
    </Layout>
  );
};

export default SweetTravelDeals;
