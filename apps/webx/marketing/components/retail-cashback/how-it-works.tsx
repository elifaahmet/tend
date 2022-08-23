/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { layout } from 'styled-system';
import styled from 'styled-components';

import {
  Grid,
  Row,
  Image,
  Col,
  Carousel,
  HeadlineRule,
  Layout,
  Paragraph,
  Label,
} from '@tend/ui';
import Space from '../layout/space';

interface Perk {
  map(arg0: (perk: Perk, i: string) => JSX.Element): React.ReactNode;
  image: string;
  step: string;
  headline: string;
  body: string;
}

const StyledRow = styled(Row)`
  z-index: 1;
`;

interface DivProps {
  width?: Array<string> | string;
  height?: Array<string>;
}

const EndDiv = styled.div<DivProps>`
  ${layout};
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
`;

const StartDiv = styled.div<DivProps>`
  ${layout};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const StyledSpace = styled(Space)`
  width: 100%;
`;

export const HowItWorks = () => {
  const { t } = useTranslation('retail-cash-back');
  const perks: Perk = t('perks-carousel.perks', {
    returnObjects: true,
  });

  return (
    <Layout bg="defaultMagenta">
      <Grid>
        <StyledRow paddingTop="5rem" paddingBottom="10rem">
          <Col xs={4} sm={8} md={8} lg={12} noGutter align="space-around">
            <Carousel>
              {perks.map((perk, i) => {
                return (
                  <Col align="center" key={i}>
                    <Row
                      paddingLeft="1rem"
                      paddingRight="1rem"
                      paddingBottom={['0rem', '0.8rem', '0.8rem', '0.8rem']}
                      justify="flex-start"
                      align="flex-end"
                    >
                      <EndDiv width={['13rem', '14rem', '15rem', '13rem']}>
                        <Label variant="l3">{perk.step}</Label>
                      </EndDiv>
                    </Row>
                    <Row
                      justify="flex-start"
                      align="flex-end"
                      paddingLeft="1rem"
                      paddingRight="1rem"
                    >
                      <EndDiv
                        width={['13rem', '14rem', '15rem', '13rem']}
                        height={['5.5rem', '5.5rem', '5.5rem', '5.5rem']}
                      >
                        <StyledSpace marginBottom="1rem">
                          <HeadlineRule
                            variant="h5Small"
                            color="black"
                            ruleColor="black"
                          >
                            {perk.headline}
                          </HeadlineRule>
                        </StyledSpace>
                      </EndDiv>
                    </Row>
                    <Row
                      justify="flex-start"
                      align="flex-start"
                      paddingLeft="1rem"
                      paddingRight="1rem"
                    >
                      <StartDiv
                        width={['13rem', '14rem', '15rem', '13rem']}
                        height={['7rem', '7rem', '7rem', '7rem']}
                      >
                        <Paragraph
                          marginBottom="1.5rem"
                          variant="b3"
                          color="black"
                        >
                          {perk.body}
                        </Paragraph>
                      </StartDiv>
                    </Row>
                  </Col>
                );
              })}
            </Carousel>
          </Col>
        </StyledRow>
      </Grid>
    </Layout>
  );
};

export default HowItWorks;
