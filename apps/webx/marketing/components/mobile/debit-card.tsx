/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Layout, Grid, Row, Col, HeadlineBody, Image } from '@tend/ui';

export const DebitCard = () => {
  const { t } = useTranslation('mobile');
  return (
    <Layout bg="defaultYellow">
      <Grid>
        <Row
          justify="center"
          paddingTop={['2rem', '3rem', '4rem', '5.6rem']}
          paddingBottom={['8rem', '8rem', '10rem', '11rem']}
          reverse={['xs', 'sm']}
        >
          <Col justify="flex-start" align="flex-start" sm={4} md={3.5} lg={5}>
            <HeadlineBody
              variant="xl"
              bodyVariant="b2l"
              gridRowGap={['1.56rem', '2.8rem']}
              title={t('debit-card.headline')}
            >
              {t('debit-card.body')}
            </HeadlineBody>
          </Col>

          <Col
            justify="flex-end"
            align="flex-end"
            sm={4}
            md={4.5}
            lg={7}
            paddingBottom={['2.2rem']}
          >
            <Image imgWidth="100%" src={t('debit-card.image')} />
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default DebitCard;
