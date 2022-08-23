import React from 'react';
import { Grid, Row, Col } from '../grid/grid';
import HeadlineRuleBodyButton from '../headline-rule-body-button/headline-rule-body-button';
import { Carousel } from './carousel';
import { Image } from '../image/image';


//@TODO: fix Carousel so that props work correctly. Or, rewrite?
export default {
  component: Carousel,
  title: 'Carousel',
  argTypes: {
    Usage: {
      description: 'Carousel container',
      table: {
        type: { 
            summary: 'Required markup', 
            detail: '<Carousel> </Carousel>' 
        },
      },
      control: {
        type: null,
      },
    },
  },
  args: {
    slidable: false,
    showArrows: false,
  }
};

export const primary = (args) => {
  return (
    <Grid fluid>
      <Carousel {...args}>
        <Col paddingRight={15}>
          <Row>
            <Image cache src={'https://picsum.photos/125/125?key=1'} />
          </Row>
          <Row>
            <HeadlineRuleBodyButton
              variant="h5"
              buttonText="TAKE A LOOK"
              color="neutral.4"
              ctaLinkProps={{
                href: 'https://example.com',
                color: 'neutral.4',
              }}
              title="Direct deposit"
              titleColor="neutral.4"
              ruleColor="magenta.0"
            >
              Set it, forget it, and get your paycheck up to two days sooner every single pay period.
            </HeadlineRuleBodyButton>
          </Row>
        </Col>
        <Col paddingRight={15}>
          <Row>
            <Image cache src={'https://picsum.photos/125/125?key=2'} />
          </Row>
          <Row>
            <HeadlineRuleBodyButton
              variant="h5"
              buttonText="TAKE A LOOK"
              color="neutral.4"
              ctaLinkProps={{
                href: 'https://example.com',
                color: 'neutral.4',
              }}
              title="No-fee ATMs"
              titleColor="neutral.4"
              ruleColor="orange.0"
            >
              Get fast access to your cash at 55,000 no-fee ATMS across the world.
            </HeadlineRuleBodyButton>
          </Row>
        </Col>
        <Col paddingRight={15}>
          <Row>
            <Image cache src={'https://picsum.photos/125/125?key=3'} />
          </Row>
          <Row>
            <HeadlineRuleBodyButton
              variant="h5"
              buttonText="TAKE A LOOK"
              color="neutral.4"
              ctaLinkProps={{
                href: 'https://example.com',
                color: 'neutral.4',
              }}
              title="Line of credit"
              titleColor="neutral.4"
              ruleColor="red.0"
            >
              Access up to 75% of the amount in your savings as a secured line of credit, just in case.
            </HeadlineRuleBodyButton>
          </Row>
        </Col>
        <Col paddingRight={15}>
          <Row>
            <Image cache src={'https://picsum.photos/125/125?key=4'} />
          </Row>
          <Row>
            <HeadlineRuleBodyButton
              variant="h5"
              buttonText="TAKE A LOOK"
              color="neutral.4"
              ctaLinkProps={{
                href: 'https://example.com',
                color: 'neutral.4',
              }}
              title="You’re covered"
              titleColor="neutral.4"
              ruleColor="yellow.0"
            >
              Automatically enroll in a $10,000 accidental death insurance plan for a little extra peace of mind.
            </HeadlineRuleBodyButton>
          </Row>
        </Col>
      </Carousel>
    </Grid>
  );
};
