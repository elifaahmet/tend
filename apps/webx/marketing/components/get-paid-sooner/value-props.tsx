/** @format */

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import {
  Grid,
  Row,
  Image,
  Col,
  IconHeadlineBody,
  Layout,
  CTALink,
} from '@tend/ui';

import Space from '../layout/space';

interface ValuePropsProps {
  map(arg0: (prop: ValuePropsProps, i: string) => JSX.Element): React.ReactNode;
  label: string;
  body: string;
  cta?: {
    url: string;
    label: string;
  };
}

export const ValueProps = () => {
  const { t } = useTranslation('get-paid-sooner');
  const valueProps: ValuePropsProps = t('value-props.value-props', {
    returnObjects: true,
  });

  return (
    <Layout rowOverlay={true} bg="offWhite">
      <Grid paddingTop={['5.5625rem']} paddingBottom={['5.5625rem']}>
        <Row>
          <Col align="center" justify="center" xs={4} sm={8} md={8} lg={6}>
            <Image
              src={t('value-props.image')}
              resizeMode="cover"
              imgWidth="50%"
            />
          </Col>

          <Col xs={4} sm={8} md={8} lg={6}>
            <Space marginTop={['3rem', '5rem', '0', '0']}>
              {valueProps.map((prop, i) => {
                return (
                  <div key={i}>
                    <IconHeadlineBody
                      layout="vertical"
                      variant="small"
                      title={prop.label}
                      key={i}
                      marginBottom={prop.cta ? '0.75rem' : '2.5rem'}
                    >
                      {prop.body}
                    </IconHeadlineBody>
                    {prop.cta && (
                      <Space marginBottom="2.5rem">
                        <Link href={prop.cta.url}>
                          <CTALink>{prop.cta.label}</CTALink>
                        </Link>
                      </Space>
                    )}
                  </div>
                );
              })}
            </Space>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default ValueProps;
