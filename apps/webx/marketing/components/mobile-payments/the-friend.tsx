/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Layout, Grid, Row, Col, HeadlineBody } from '@tend/ui';
import Space from '../layout/space';

export const TheFriend = () => {
  const { t } = useTranslation('mobile-payments');

  return (
    <Layout bg="defaultRed">
      <Space
        marginTop={['2rem', '2rem', '3rem', '5rem']}
        marginBottom={['8rem', '8rem', '10rem', '12rem']}
      >
        <Grid>
          <Row>
            <Col xs={3} sm={6} md={6} lg={10}>
              <HeadlineBody
                titleVariant="h1"
                bodyVariant="b1"
                title={t('the-friend.headline')}
                gridRowGap={['2.2rem', '2.2rem', '3.2rem', '4.2rem']}
              >
                {t('the-friend.body')}
              </HeadlineBody>
            </Col>
            <Col xs={1} sm={2} md={2} lg={2} />
          </Row>
        </Grid>
      </Space>
    </Layout>
  );
};

export default TheFriend;
