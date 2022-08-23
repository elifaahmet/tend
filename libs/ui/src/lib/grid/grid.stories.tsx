import React from 'react';
import { Grid, Row, Col } from './grid';

export default {
  component: Grid,
  title: 'Grid',
};

export const primary = () => {

  return (
    <Grid fluid bg={'green.0'}>
      <Row>
        <Col>
          <h1>Tend</h1>
        </Col>
      </Row>
      <Row top={'sm'} center={'sm'}>
        <Col sm={4}>
          <div>
            BANK
            <br />
            EARN
            <br />
            TEND SHARES
            <br />
            COVER
            <br />
            THE GREEN
            <br />
            ABOUT US
            <br />
            SUPPORT
          </div>
        </Col>
        <Col sm={8}>
          <Row size={4}>
            <a href={'#en'}>EN</a>
            <a href={'#es'}>ES</a>
          </Row>
          <Row size={6}>
            <Col>
              <p>Contact</p>
              <p>
                support@tend.money
                <br />
                1–800–TEND (698–4637)
                <br />
                Monday–Friday: 7am–10pm EST
                <br />
                Saturday–Sunday: 7am–3pm EST
                <br />
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row around={'md'}>
        <Col md={4}>
          <p>Social Icons</p>
        </Col>
        <Col md={8}>
          <p>Download App Icons Download App Icons Download App Icons</p>
        </Col>
      </Row>
      <Row around={'md'} start={'sm'}>
        <Col sm={3} md={4}>
          <p>@2020 Tend</p>
        </Col>
        <Col sm={1} md={8}>
          <a href="#privacy">Privacy</a>
          <a href="#accessibility">Accessibility</a>
          <a href="#terms">Terms</a>
        </Col>
      </Row>
    </Grid>
  );
};
