/** @format */

import React from 'react';

import { Grid, Row, Col, HeadlineBody, Image, Layout } from '@tend/ui';

export const ModuleThree = () => {
  return (
    <Layout bg="offWhite">
      <Grid>
        <Row paddingTop="5rem" paddingBottom="8rem">
          <Col
            paddingBottom="2rem"
            align="center"
            justify="center"
            xs={4}
            sm={8}
            md={8}
            lg={4}
          >
            <Image src="tend-shares/thegreen.png" imgHeight="13rem" />
          </Col>
          <Col align="center" justify="flex-start" xs={4} sm={8} md={8} lg={8}>
            <HeadlineBody
              title="It pays to pitch in. Monthly."
              color="black"
              gridRowGap={['2rem', '2rem', '2rem', '3rem']}
              bodyVariant="b2"
              titleVariant="h3"
            >
              Your Tend card gets you cash back at tons of local retailers—some
              even offer more than 15%. Supporting your community feels even
              better when you get cash back for it.
            </HeadlineBody>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default ModuleThree;
