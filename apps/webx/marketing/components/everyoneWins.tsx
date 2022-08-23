/** @format */

import React from 'react';

import { Grid, Row, Icon, H4, Col, Layout } from '@tend/ui';

interface EverOneWinsProps {
  bg: string;
}

export const EverOneWins = (props: EverOneWinsProps) => {
  return (
    <Layout bg={props.bg}>
      <Grid bg={props.bg}>
        <Row paddingTop="2rem" align="center">
          <Col
            align="flex-end"
            xs={0.5}
            sm={1}
            md={1}
            lg={0.8}
            paddingBottom="2rem"
          >
            <H4 color="offWhite">You</H4>
          </Col>
          <Col
            align="center"
            xs={0.5}
            sm={1}
            md={1}
            lg={0.8}
            paddingBottom="2rem"
          >
            <Icon
              svgWidth={['1.5rem', '1.5rem', '2.5rem', '2.5rem']}
              svgHeight="2.8rem"
              iconName="TendPlus"
              fontWeight={1}
            />
          </Col>
          <Col
            align="flex-start"
            xs={1}
            sm={1.6}
            md={1.6}
            lg={2.0}
            justify="center"
            paddingBottom="2rem"
          >
            <H4 color="offWhite">Friends</H4>
          </Col>
          <Col
            align="center"
            xs={0.5}
            sm={1}
            md={1}
            lg={0.8}
            paddingBottom="2rem"
          >
            <Icon
              svgWidth={['1.5rem', '1.5rem', '2.5rem', '2.5rem']}
              svgHeight="2.8rem"
              iconName="TendPlus"
              fontWeight={1}
            />
          </Col>
          <Col
            align="flex-start"
            xs={1.5}
            sm={3.0}
            md={3.0}
            lg={1.4}
            paddingBottom="2rem"
          >
            <H4 color="offWhite">Tend</H4>
          </Col>
          <Col
            align="flex-end"
            xs={0.4}
            sm={0.8}
            md={0.8}
            lg={0.7}
            paddingBottom="2rem"
          >
            <Icon
              svgWidth={['1.5rem', '1.5rem', '2.5rem', '2.5rem']}
              iconName="TendEquals"
              fontWeight={1}
            />
          </Col>
          <Col
            align="flex-start"
            xs={2.5}
            sm={5}
            md={5}
            lg={5.5}
            paddingBottom="2rem"
          >
            <Row paddingLeft={['1rem', '1rem', '1rem', '3rem']}>
              <H4 color="offWhite">Everyone Wins</H4>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default EverOneWins;
