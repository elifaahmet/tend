/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Grid, Row, Col, HeadlineBody, Image, Layout } from '@tend/ui';

export const MonthlyPayouts = () => {
  const { t } = useTranslation('shares');
  return (
    <Layout bg="offWhite">
      <Grid>
        <Row paddingTop="5rem" paddingBottom="8rem">
          <Col
            paddingBottom="2rem"
            align="center"
            justify="center"
            xs={4}
            sm={8}
            md={8}
            lg={4}
          >
            <Image
              src={t('monthly-payouts.image')}
              imgHeight="13rem"
              imgWidth="13rem"
            />
          </Col>
          <Col align="center" justify="flex-start" xs={4} sm={8} md={8} lg={8}>
            <HeadlineBody
              title={t('monthly-payouts.headline')}
              color="black"
              gridRowGap={['2rem', '2rem', '2rem', '3rem']}
              bodyVariant="b2"
              titleVariant="h3"
            >
              {t('monthly-payouts.body')}
            </HeadlineBody>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default MonthlyPayouts;
