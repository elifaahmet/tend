/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Row, Col, HeadlineBody, Layout } from '@tend/ui';

export const DiveBar = () => {
  const { t } = useTranslation('debit-card');

  return (
    <Layout backgroundImage="url('/images/common/enUS/water-background-texture.jpg')">
      <Row paddingTop="3rem" paddingBottom="5rem" justify="center">
        <Col align="center" justify="center" xs={3} sm={7} md={7} lg={12}>
          <HeadlineBody
            title={t('dive-bar.headline')}
            color="black"
            gridRowGap={['2rem', '2rem', '2rem', '3rem']}
            bodyVariant="b1"
            titleVariant="h1"
          >
            {t('dive-bar.body')}
          </HeadlineBody>
        </Col>
      </Row>
    </Layout>
  );
};

export default DiveBar;
