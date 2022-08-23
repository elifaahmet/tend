/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import ComingSoon from '../modules/coming-soon';
import { Grid, Row, Image, Col, IconHeadlineBody, Layout } from '@tend/ui';

import Space from '../layout/space';

// TODO: Move to Interfaces
interface ValueProps {
  map(arg0: (prop: ValueProps, i: string) => JSX.Element): React.ReactNode;
  label: string;
  body: string;
  comingSoon: boolean;
  comingSoonInner: boolean;
}

// TODO: Move to UI Library
const ImageAspectRatioContainer = styled.div`
  height: 0;
  overflow: hidden;
  padding-top: calc(400 / 339 * 100%); // Mobile
  margin-top: -10rem;
  position: relative;

  @media (min-width: 836px) {
    padding-top: calc(864 / 498 * 100%); // Desktop
  }
`;

const ImageAspectRatioInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Transfers = () => {
  const { t } = useTranslation('mobile-payments');
  const valueProps: ValueProps = t('transfers.value-props', {
    returnObjects: true,
  });

  return (
    <Layout rowOverlay={true} bg="offWhite">
      <Grid
        paddingTop={['5.5625rem']}
        paddingBottom={['2rem', '2rem', '5rem', '10rem']}
      >
        <Row>
          <Col xs={4} sm={8} md={8} lg={6}>
            <ImageAspectRatioContainer>
              <ImageAspectRatioInner>
                <Image
                  src={t('transfers.image')}
                  resizeMode="cover"
                  imgWidth="100%"
                />
              </ImageAspectRatioInner>
            </ImageAspectRatioContainer>
          </Col>

          <Col xs={4} sm={8} md={8} lg={6}>
            <Space marginTop={['3rem', '5rem', '-2rem', '0']}>
              {valueProps.map((prop, i) => {
                return (
                  <IconHeadlineBody
                    layout="vertical"
                    variant="small"
                    title={prop.label}
                    key={i}
                  >
                    {prop.comingSoon ? <ComingSoon /> : null}
                    {prop.comingSoonInner ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: prop.body }}
                      ></div>
                    ) : (
                      prop.body
                    )}
                  </IconHeadlineBody>
                );
              })}
            </Space>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default Transfers;
