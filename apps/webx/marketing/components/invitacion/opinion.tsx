/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Layout, Grid, Paragraph, Row, Col, HeadlineBody } from '@tend/ui';

export const Opinion = () => {
  const { t } = useTranslation('invitacion');
  return (
    <Layout bg="defaultMagenta">
      <Grid>
        <Row
          justify="left"
          paddingTop={['2rem', '3rem', '4rem', '5.6rem']}
          paddingBottom={['2rem', '2rem', '2rem', '2rem']}
          reverse={['xs', 'sm']}
        >
          <Col sm={8} md={3.5} lg={8}>
            <HeadlineBody
              variant="xl"
              bodyVariant="b2l"
              gridRowGap={['1.56rem', '2.8rem']}
              title={t('opinion.headline')}
            >
              <Paragraph variant="b2" marginBottom="1rem">
                {t('opinion.copy')}
              </Paragraph>
              <Paragraph variant="b2" marginBottom="1rem">
                <div
                  dangerouslySetInnerHTML={{ __html: t('opinion.copy-2') }}
                ></div>
              </Paragraph>
              <Paragraph variant="b2" marginBottom="1rem">
                {t('opinion.copy-3')}
              </Paragraph>
              <Paragraph variant="b2">{t('opinion.copy-4')}</Paragraph>
            </HeadlineBody>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default Opinion;
