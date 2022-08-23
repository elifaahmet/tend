/** @format */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import ComingSoon from '../modules/coming-soon';

import { Grid, Row, Col, HeadlineBody, Image, Layout } from '@tend/ui';

export const TrackCredit = () => {
  const { t } = useTranslation('line-of-credit');
  const { locale } = useRouter();
  const [creditScoreImg, setCreditScoreImg] = useState<string>('');

  useEffect(() => {
    setCreditScoreImg(t('track-credit-score.image'));
  }, [locale]);

  return (
    <Layout bg="offWhite">
      <Grid>
        <Row paddingTop="3rem" paddingBottom="8rem">
          <Col
            paddingBottom="2rem"
            align="flex-start"
            justify="center"
            xs={3}
            sm={5}
            md={5}
            lg={6}
          >
            <Image
              src={creditScoreImg}
              imgWidth={['100%', '100%', '100%', '90%']}
            />
          </Col>
          <Col align="center" justify="flex-start" xs={3} sm={5} md={5} lg={6}>
            <HeadlineBody
              title={t('track-credit-score.headline')}
              color="black"
              gridRowGap={['2rem', '2rem', '2rem', '3rem']}
              bodyVariant="b2"
              titleVariant="h3"
            >
              {locale !== 'es-MX' ? <ComingSoon /> : null}
              {t('track-credit-score.body')}
            </HeadlineBody>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default TrackCredit;
