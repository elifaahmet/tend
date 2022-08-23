/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import {
  Grid,
  Row,
  Image,
  Col,
  IconHeadlineBody,
  Layout,
  Label,
} from '@tend/ui';

import Space from '../layout/space';

interface ValueProps {
  map(arg0: (prop: ValueProps, i: string) => JSX.Element): React.ReactNode;
  label: string;
  body: string;
  disclaimer?: string;
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

export const MobileBankingValue = () => {
  const { t } = useTranslation('mobile');

  const valueProps: ValueProps = t('value-props.value-props', {
    returnObjects: true,
  });

  return (
    <Layout rowOverlay={true} bg="offWhite">
      <Grid paddingTop={['5.5625rem']} paddingBottom={['5.5625rem']}>
        <Row>
          <Col xs={6} sm={6} md={6} lg={6}>
            <ImageAspectRatioContainer>
              <ImageAspectRatioInner>
                <Image
                  src={t('value-props.image')}
                  resizeMode="cover"
                  imgWidth={['100%', '100%', '100%', '90%']}
                />
              </ImageAspectRatioInner>
            </ImageAspectRatioContainer>
          </Col>

          <Col xs={6} sm={6} md={6} lg={6} align="flex-end">
            <Space marginTop={['3rem', '5rem', '0', '0']}>
              {valueProps.map((prop, index) => {
                return (
                  <IconHeadlineBody
                    key={index}
                    layout="vertical"
                    variant="small"
                    title={prop.label}
                  >
                    {prop.comingSoonInner ? (
                      <div
                        dangerouslySetInnerHTML={{ __html: prop.body }}
                      ></div>
                    ) : (
                      prop.body
                    )}
                    {prop.disclaimer && (
                      <Label variant="l4" marginTop="1rem">
                        {prop.disclaimer}
                      </Label>
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

export default MobileBankingValue;
