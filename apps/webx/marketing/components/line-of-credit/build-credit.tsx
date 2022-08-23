/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Grid, Row, Col, HeadlineBody, Layout } from '@tend/ui';

const BuildCredit = () => {
  const { t } = useTranslation('line-of-credit');

  return (
    <Layout bg="defaultYellow">
      <Grid>
        <Row justify="flex-start" paddingBottom="4rem" paddingTop="3rem">
          <Col xs={4} sm={8} md={8} lg={9}>
            <HeadlineBody
              titleVariant="h1"
              bodyVariant="b1"
              title={t('build-credit.headline')}
              gridRowGap={['1rem', '1rem', '2rem', '3rem']}
            >
              {t('build-credit.body')}
            </HeadlineBody>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default BuildCredit;
