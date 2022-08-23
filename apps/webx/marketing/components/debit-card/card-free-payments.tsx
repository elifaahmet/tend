/** @format */

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Grid, Row, Col, HeadlineBody, Image, Layout } from '@tend/ui';

const StyledCol = styled(Col)`
  & > img {
    max-width: 95%;
  }
`;

export const CardFreePayments = () => {
  const { t } = useTranslation('debit-card');

  const { locale } = useRouter();
  const [cardImg, setCardImg] = useState<string>('');

  useEffect(() => {
    setCardImg(t('card-free-payments.image'));
  }, [locale]);

  return (
    <Layout bg="offWhite">
      <Grid>
        <Row paddingTop="5rem" paddingBottom="8rem">
          <StyledCol
            paddingBottom="3rem"
            align="center"
            justify="center"
            xs={4}
            sm={8}
            md={8}
            lg={6}
          >
            <Image src={cardImg} imgWidth="95%" />
          </StyledCol>
          <Col
            paddingBottom="3rem"
            align="center"
            justify="center"
            xs={4}
            sm={8}
            md={8}
            lg={6}
          >
            <HeadlineBody
              title={t('card-free-payments.headline')}
              color="black"
              gridRowGap={['2rem', '2rem', '2rem', '3rem']}
              bodyVariant="b2"
              titleVariant="h3"
            >
              {locale !== 'es-MX' ? (
                <div
                  dangerouslySetInnerHTML={{
                    __html: t('card-free-payments.body'),
                  }}
                ></div>
              ) : (
                t('card-free-payments.body')
              )}
            </HeadlineBody>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default CardFreePayments;
