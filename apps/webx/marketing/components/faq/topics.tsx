/** @format */

import React from 'react';
import styled from 'styled-components';

import { Grid, Row, Col, Layout, CTALink, Label } from '@tend/ui';
import Space from '../layout/space';

const GridColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  > * {
    margin-bottom: 1rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
`;

export const Topics = () => {
  return (
    <Layout bg="defaultGreen">
      <Space marginBottom={['2rem', '2rem', '2rem', '3rem']}>
        <Grid>
          <Row paddingTop="1rem" paddingBottom="1rem" justify="flex-start">
            <Col xs={4} sm={8} md={8} lg={6}>
              <Label color="white" variant="l4">
                Topics
              </Label>
            </Col>
          </Row>
          <Row justify="flex-start">
            <Col paddingBottom="1rem" xs={4} sm={8} md={8} lg={6}>
              <GridColumnDiv>
                <CTALink
                  href="/faq"
                  color="white"
                  variant="large"
                  textTransform="uppercase"
                >
                  Products & services
                </CTALink>
                <CTALink
                  href="/faq"
                  color="white"
                  variant="large"
                  textTransform="uppercase"
                >
                  Rewards programs
                </CTALink>
                <CTALink
                  href="/faq"
                  color="white"
                  variant="large"
                  textTransform="uppercase"
                >
                  Account information
                </CTALink>
                <CTALink
                  href="/faq"
                  color="white"
                  variant="large"
                  textTransform="uppercase"
                >
                  Tend App
                </CTALink>
              </GridColumnDiv>
            </Col>
            <Col xs={4} sm={8} md={8} lg={6}>
              <GridColumnDiv>
                <CTALink
                  href="/faq"
                  color="white"
                  variant="large"
                  textTransform="uppercase"
                >
                  Subscriptions & costs
                </CTALink>
                <CTALink
                  href="/faq"
                  color="white"
                  variant="large"
                  textTransform="uppercase"
                >
                  Security & privacy
                </CTALink>
                <CTALink
                  href="/faq"
                  color="white"
                  variant="large"
                  textTransform="uppercase"
                >
                  Member banks & corporations
                </CTALink>
              </GridColumnDiv>
            </Col>
          </Row>
        </Grid>
      </Space>
    </Layout>
  );
};

export default Topics;
