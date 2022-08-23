/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';
import ComingSoon from '../modules/coming-soon';

import { Layout, Grid, Row, H1, Paragraph } from '@tend/ui';

export const SendMoneyAbroad = () => {
  const { t } = useTranslation('international-transfers');
  const { locale } = useRouter();
  return (
    <Layout
      bg="defaultGreen"
      backgroundImage="url('/images/common/enUS/water-vawes-texture.jpeg')"
    >
      <Grid paddingTop={['5.5625rem']} paddingBottom={['5.5625rem']}>
        <Row paddingBottom={['5.5625rem']}>
          <H1>{t('send-money-abroad.headline')}</H1>
        </Row>
        <Row paddingBottom={['3.75rem']}>
          <Paragraph variant="b1">
            {t('send-money-abroad.body')}
          </Paragraph>
        </Row>
      </Grid>
    </Layout>
  );
};

export default SendMoneyAbroad;
