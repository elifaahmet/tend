/** @format */

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import {
  Grid,
  Row,
  Col,
  RangeTrack,
  Paragraph,
  H1,
  Layout,
  Theme,
} from '@tend/ui';

const MONTH_COUNT = 12;
const MONTHLY_SHOPPING_FACTOR = 0.05;

const TRAVEL_SPENDING_FACTOR = 0.12;

const MX_YEARLY_OVERDRAFT_FEE_FACTOR = 35;
const US_YEARLY_OVERDRAFT_FEE_FACTOR = 33.47;

const MX_MONTHLY_ATM_FEE_FACTOR = 30;
const US_MONTHLY_ATM_FEE_FACTOR = 4.64;

const MX_YEARLY_REFERRING_BASE_FACTOR = 877.53;
const US_YEARLY_REFERRING_BASE_FACTOR = 43.68;

const MX_YEARLY_REFERRING_MONTHLY_FACTOR = 99;
const US_YEARLY_REFERRING_MONTHLY_FACTOR = 9.95;

const MX_REFERRING_EXTRA_PEOPLE_BENEFITS = [
  { limit: 24, extraBenefit: 1000 },
  { limit: 12, extraBenefit: 500 },
];
const US_REFERRING_EXTRA_PEOPLE_BENEFITS = [
  { limit: 24, extraBenefit: 100 },
  { limit: 12, extraBenefit: 50 },
];

const CALCULATED_VALUE_NAMES = [
  'monthlyShopping',
  'yearlyTravelSpending',
  'yearlyOverdraftFees',
  'monthlyATMFees',
  'yearlyReferringPeople',
] as const;

type CalculatedValueNames = typeof CALCULATED_VALUE_NAMES[number];

type CalculatedValue = {
  value: number;
  rangeMin: number;
  rangeMax: number;
  step: number;
  questionKey: string;
  valuePrefix: string;
  hide?: boolean;
  paddingBottom?: string | string[];
  paddingLeft?: string | string[];
  paddingRight?: string | string[];
};

type CalculatorFunction = {
  func: (...args) => (arg: number) => number;
  argNames: CalculatedValueNames[];
};

interface RewardsCalculatorProps {
  bg: string;
}

const Div = styled.div`
  width: 95%;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    width: 100;
  }
`;

const calculateMonthlyShoppingBenefit = (monthlyShopping: number) => (
  currentTotal: number
) => currentTotal + monthlyShopping * MONTHLY_SHOPPING_FACTOR * MONTH_COUNT;

const calculateYearlyTravelBenefit = (yearlyTravelSpending: number) => (
  currentTotal: number
) => currentTotal + yearlyTravelSpending * TRAVEL_SPENDING_FACTOR;

const calculatorYearlyOverDraftFeeBenefitByLocale = (isLocaleMx: boolean) => {
  return (yearlyOverdraftFees: number) => (currentTotal: number) => {
    if (isLocaleMx) {
      return currentTotal;
    } else {
      return (
        currentTotal + yearlyOverdraftFees * US_YEARLY_OVERDRAFT_FEE_FACTOR
      );
    }
  };
};

const calculatorMonthlyATMFeeBenefitByLocale = (isLocaleMx: boolean) => {
  return (monthlyATMFees: number) => (currentTotal: number) => {
    if (isLocaleMx) {
      return (
        currentTotal + monthlyATMFees * MX_MONTHLY_ATM_FEE_FACTOR * MONTH_COUNT
      );
    } else {
      return (
        currentTotal + monthlyATMFees * US_MONTHLY_ATM_FEE_FACTOR * MONTH_COUNT
      );
    }
  };
};

const calculatorYearlyReferringPeopleBenefitByLocale = (
  isLocaleMx: boolean
) => {
  return (yearlyReferringPeople: number) => (currentTotal: number) => {
    if (isLocaleMx) {
      return (
        currentTotal +
        yearlyReferringPeople * MX_YEARLY_REFERRING_BASE_FACTOR +
        Math.min(
          yearlyReferringPeople * MX_YEARLY_REFERRING_MONTHLY_FACTOR,
          MX_YEARLY_REFERRING_MONTHLY_FACTOR * MONTH_COUNT
        )
      );
    } else {
      return (
        currentTotal +
        yearlyReferringPeople * US_YEARLY_REFERRING_BASE_FACTOR +
        Math.min(
          yearlyReferringPeople * US_YEARLY_REFERRING_MONTHLY_FACTOR,
          US_YEARLY_REFERRING_MONTHLY_FACTOR * MONTH_COUNT
        )
      );
    }
  };
};

const calculatorYearlyReferringExtraPeopleBenefitByLocale = (
  isLocaleMx: boolean
) => {
  const limitAndExtraBenefits = isLocaleMx
    ? MX_REFERRING_EXTRA_PEOPLE_BENEFITS
    : US_REFERRING_EXTRA_PEOPLE_BENEFITS;

  return (yearlyReferringPeople: number) => (currentTotal: number) => {
    for (const limitAndExtraBenefit of limitAndExtraBenefits) {
      if (yearlyReferringPeople >= limitAndExtraBenefit.limit) {
        return currentTotal + limitAndExtraBenefit.extraBenefit;
      }
    }
    return currentTotal;
  };
};

export const RewardsCalculator = (props: RewardsCalculatorProps) => {
  const { t } = useTranslation('rewards-calculator');
  const router = useRouter();
  const { locale } = router;
  const isLocaleMX = locale.slice(-2) === 'MX';

  const [calculationValues, setCalculationValues] = useState<
    { [key in CalculatedValueNames]: CalculatedValue }
  >({
    monthlyShopping: {
      value: 1000,
      rangeMin: 100,
      rangeMax: 10000,
      step: 50,
      questionKey: 'shopping',
      valuePrefix: '$',
      ...(isLocaleMX
        ? { value: 10000, rangeMin: 1000, rangeMax: 100000, step: 500 }
        : {}),
    },
    yearlyTravelSpending: {
      value: 2000,
      rangeMin: 0,
      rangeMax: 15000,
      step: 100,
      questionKey: 'travel',
      valuePrefix: '$',
      ...(isLocaleMX ? { value: 20000, rangeMax: 100000, step: 1000 } : {}),
    },
    yearlyOverdraftFees: {
      value: 5,
      rangeMin: 0,
      rangeMax: 30,
      step: 1,
      questionKey: 'overdraft',
      valuePrefix: '',
      hide: isLocaleMX,
    },
    monthlyATMFees: {
      value: 3,
      rangeMin: 0,
      rangeMax: 20,
      step: 1,
      questionKey: 'atm-fees',
      valuePrefix: '',
    },
    yearlyReferringPeople: {
      value: 5,
      rangeMin: 0,
      rangeMax: 40,
      step: 1,
      questionKey: 'refer',
      valuePrefix: '',
      paddingBottom: '0rem',
    },
  });

  const [totalAnnualSavings, setTotalAnnualSavings] = useState<number>(0);

  const pipedCalculator = useMemo(() => {
    const pipedCalculators: CalculatorFunction[] = [
      // not calling function in first two because they dont have closure values
      { func: calculateMonthlyShoppingBenefit, argNames: ['monthlyShopping'] },
      {
        func: calculateYearlyTravelBenefit,
        argNames: ['yearlyTravelSpending'],
      },
      {
        func: calculatorYearlyOverDraftFeeBenefitByLocale(isLocaleMX),
        argNames: ['yearlyOverdraftFees'],
      }, // The others closures with locale info while returning another function so calling them
      {
        func: calculatorMonthlyATMFeeBenefitByLocale(isLocaleMX),
        argNames: ['monthlyATMFees'],
      },
      {
        func: calculatorYearlyReferringPeopleBenefitByLocale(isLocaleMX),
        argNames: ['yearlyReferringPeople'],
      },
      {
        func: calculatorYearlyReferringExtraPeopleBenefitByLocale(isLocaleMX),
        argNames: ['yearlyReferringPeople'],
      },
    ];
    return pipedCalculators;
  }, [isLocaleMX]);

  useEffect(() => {
    const finalTotal = pipedCalculator.reduce(
      (prev: number, current: CalculatorFunction) => {
        return current.func(
          ...current.argNames.map((argName) => calculationValues[argName].value)
        )(prev);
      },
      0
    );
    setTotalAnnualSavings(finalTotal);
  }, [calculationValues, pipedCalculator]);

  /** @tech-debt
   *
   * We want to get rid off this current "Grid component". We might to want to use css grid.
   * Also we want to change old-style padding syntaxes (padding-left, padding-top, padding-right, padding-bottom)
   * with new ones (padding-inline-start, padding-block-start, padding-inline-end, padding-block-end)
   * */
  return (
    <Layout bg={props.bg}>
      <Grid bg={props.bg}>
        <Row
          paddingTop={['2.375rem', '2.375rem', '10.5rem', '10.5rem']}
          paddingBottom={['7.5rem', '7.5rem', '10rem', '10rem']}
        >
          <Col xs={4} sm={8} md={8} lg={12}>
            <Row reverse={['xs', 'sm', 'md']}>
              <Col xs={4} sm={8} md={8} lg={3.5}>
                {Object.keys(calculationValues).map((key) => {
                  const calculationValue = calculationValues[key];
                  if (calculationValue.hide) {
                    return null;
                  }
                  return (
                    <Row
                      key={key}
                      paddingLeft={
                        calculationValue.paddingLeft || [
                          '4%',
                          '4%',
                          '4%',
                          '0rem',
                        ]
                      }
                      paddingRight={
                        calculationValue.paddingRight || [
                          '4%',
                          '4%',
                          '4%',
                          '0rem',
                        ]
                      }
                      paddingBottom={calculationValue.paddingBottom || '3rem'}
                    >
                      <Div>
                        <RangeTrack
                          min={calculationValue.rangeMin}
                          max={calculationValue.rangeMax}
                          values={[calculationValue.value]}
                          step={calculationValue.step}
                          onValueChange={(values: Array<number>) => {
                            setCalculationValues((currentVal) => ({
                              ...currentVal,
                              [key]: { ...calculationValue, value: values[0] },
                            }));
                          }}
                          formatValue={(value: string) => {
                            return `${calculationValue.valuePrefix}${Number(
                              value
                            ).toLocaleString()}`;
                          }}
                          question={t(calculationValue.questionKey)}
                        />
                      </Div>
                    </Row>
                  );
                })}
              </Col>

              <Col xs={4} sm={8} md={8} lg={8.5}>
                <Row
                  paddingLeft={['0rem', '0rem', '0rem', '2rem']}
                  paddingBottom="1rem"
                  justify="center"
                >
                  <Paragraph variant="b2" bold textTransform="uppercase">
                    {t('headline')}
                  </Paragraph>
                </Row>
                <Row
                  paddingLeft={['0rem', '0rem', '0rem', '2rem']}
                  justify="center"
                  paddingBottom={['2rem', '2rem', '2rem', '5rem']}
                >
                  <H1 variant="hero">
                    {`$${Number(
                      totalAnnualSavings.toFixed(0)
                    ).toLocaleString()}`}
                  </H1>
                </Row>
                <Row
                  paddingLeft={['0rem', '0rem', '0rem', '2rem']}
                  paddingBottom={['5rem', '5rem', '5rem', '0rem']}
                  justify="center"
                >
                  <Paragraph variant="b6">{t('disclaimer')}</Paragraph>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default RewardsCalculator;
