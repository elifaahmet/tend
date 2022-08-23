/** @format */

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Grid, Row, Col, RangeTrack, Paragraph, H1, Layout } from '@tend/ui';

export const ModuleTwo = () => {
  const { t } = useTranslation('shares');

  const [yearlyReferringPeople, setYearlyReferringPeople] = useState<number>(5);
  const [totalAnnualSavings, setTotalAnnualSavings] = useState<number>(0);

  useEffect(() => {
    let total = 0;
    total +=
      yearlyReferringPeople * 45.96 +
      Math.min(yearlyReferringPeople * 9.95, 9.95 * 12);
    if (yearlyReferringPeople >= 24) {
      setTotalAnnualSavings(total + 100);
    } else if (yearlyReferringPeople >= 12) {
      setTotalAnnualSavings(total + 50);
    } else setTotalAnnualSavings(total);
  }, [yearlyReferringPeople]);

  return (
    <Layout bg="defaultRed">
      <Grid>
        <Row paddingTop="5rem" paddingBottom="5rem">
          <Col xs={4} sm={8} md={8} lg={12}>
            <Row reverse={['xs', 'sm', 'md']} align="center">
              <Col xs={4} sm={8} md={8} lg={3.5}>
                <Row
                  paddingLeft={['4%', '4%', '4%', '0rem']}
                  paddingRight={['4%', '4%', '4%', '0rem']}
                  paddingBottom="3rem"
                >
                  <RangeTrack
                    min={0}
                    max={40}
                    values={[5]}
                    step={1}
                    onValueChange={(values: Array<number>) => {
                      setYearlyReferringPeople(values[0]);
                    }}
                    formatValue={(value: string) => {
                      return `${value}`;
                    }}
                    question={t('calculator.body')}
                  />
                </Row>
              </Col>
              <Col xs={4} sm={8} md={8} lg={8.5}>
                <Row paddingLeft="2rem" justify="center" paddingBottom="2rem">
                  <Paragraph variant="b2" bold textTransform="uppercase">
                    {t('calculator.headline')}
                  </Paragraph>
                </Row>
                <Row
                  paddingLeft={['0rem', '0rem', '0rem', '2rem']}
                  justify="center"
                  paddingBottom={['5rem', '5rem', '5rem', '5rem']}
                >
                  <H1 variant="hero">{`$${Number(
                    totalAnnualSavings.toFixed(0)
                  ).toLocaleString()}`}</H1>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default ModuleTwo;
