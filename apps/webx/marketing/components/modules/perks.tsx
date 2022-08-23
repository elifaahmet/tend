/** @format */

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { layout } from 'styled-system';
import styled from 'styled-components';

import ComingSoon from '../modules/coming-soon';
import {
  Grid,
  Row,
  Image,
  Col,
  Carousel,
  Layout,
  HeadlineRule,
  Paragraph,
  CTALink,
} from '@tend/ui';
import Space from '../layout/space';

interface Perk {
  map(arg0: (perk: Perk, i: string) => JSX.Element): React.ReactNode;
  image: string;
  cta: {
    label: string;
    url: string;
  };
  headline: string;
  ruleColor: string;
  body: string;
  comingSoon: boolean;
  comingSoonInner: boolean;
}

interface PerksProps {
  bg: string;
  namesapce: string;
  paddingBottom: string | Array<string>;
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

export const Perks = (props: PerksProps) => {
  const { t } = useTranslation(props.namesapce);

  const perks: Perk = t('perks-carousel.perks', {
    returnObjects: true,
  });

  return (
    <Layout bg={props.bg}>
      <Grid>
        <StyledRow paddingTop="5rem" paddingBottom={props.paddingBottom}>
          <Col xs={4} sm={8} md={8} lg={12} noGutter align="space-around">
            <Carousel>
              {perks.map((perk, i) => {
                return (
                  <Col align="center" key={i}>
                    <Row
                      justify="flex-start"
                      align="flex-end"
                      paddingLeft="0.5rem"
                      paddingRight="0.5rem"
                      paddingBottom="1.5rem"
                    >
                      <Image
                        src={perk.image}
                        imgWidth="8rem"
                        imgHeight="10rem"
                      />
                    </Row>
                    <Row
                      justify="flex-start"
                      align="flex-end"
                      paddingLeft="1rem"
                      paddingRight="1rem"
                    >
                      <EndDiv
                        width={['13rem', '14rem', '15rem', '13rem']}
                        height={['6.5rem', '6.5rem', '6.5rem', '6.5rem']}
                      >
                        <StyledSpace marginBottom="1rem">
                          <HeadlineRule
                            variant="h5Small"
                            color="black"
                            ruleColor={perk.ruleColor}
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
                          {perk.comingSoon ? <ComingSoon /> : null}
                          {perk.comingSoonInner ? (
                            <div
                              dangerouslySetInnerHTML={{ __html: perk.body }}
                            ></div>
                          ) : (
                            perk.body
                          )}
                        </Paragraph>
                      </StartDiv>
                    </Row>
                    <Row
                      justify="flex-start"
                      align="flex-start"
                      paddingLeft="1rem"
                      paddingRight="1rem"
                    >
                      <StartDiv width={['13rem', '14rem', '15rem', '13rem']}>
                        <Link href={perk.cta.url}>
                          <CTALink
                            variant="normal"
                            textTransform="uppercase"
                            href={perk.cta.url}
                            color="black"
                          >
                            {perk.cta.label}
                          </CTALink>
                        </Link>
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

Perks.defaultProps = {
  paddingBottom: '10rem',
};

export default Perks;
