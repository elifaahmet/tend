/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Grid, Row, Col, HeadlineBody, Layout } from '@tend/ui';

const FasterAccess = () => {
  const { t } = useTranslation('get-paid-sooner');

  return (
    <Layout bg="defaultMagenta">
      <Grid>
        <Row justify="flex-start" paddingBottom="7rem" paddingTop="4rem">
          <Col xs={4} sm={8} md={8} lg={12}>
            <HeadlineBody
              titleVariant="h1"
              bodyVariant="b1"
              title={t('faster-access.headline')}
              gridRowGap={['2.25rem', '2.25rem', '3.5rem', '5rem']}
            >
              {t('faster-access.body')}
            </HeadlineBody>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default FasterAccess;
