/** @format */

import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '@tend/webx/utils/next-i18next';

import { Layout, Grid, Row, Col, Rule, H3, Icon, Theme } from '@tend/ui';

const StyledH3 = styled(H3)`
  width: 100%;
  margin-bottom: 0.5rem;
  display: inline-block;
`;

const Span = styled.span`
  display: inline;
  padding-left: 1rem;
  & > svg {
    display: inline;
  }
`;
const EqualsSpan = styled.span`
  display: inline;
  padding-left: 1rem;
  & > svg {
    margin-bottom: 0.3rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[0]}) {
    & > svg {
      margin-bottom: 0.4rem;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    & > svg {
      margin-bottom: 0.5rem;
    }
  }
`;

export const Equation = () => {
  const { t } = useTranslation('travel-rewards');

  return (
    <Layout bg="defaultYellow">
      <Grid paddingTop={['5.5625rem']} paddingBottom={['5.5625rem']}>
        <Row paddingBottom={['1.2rem', '1.5rem', '2.8rem', '2.8rem']}>
          <Col xs={4} sm={8} md={8} lg={9}>
            <StyledH3>
              {t('save-equation.request-pto')}
              <Span>
                <Icon
                  svgWidth={['1.5rem', '2.25rem', '3.3rem', '3.3rem']}
                  svgHeight={['1.5rem', '2.25rem', '3.3rem', '3.3rem']}
                  colors={['black', 'black', 'black', 'black']}
                  iconName="TendPlus"
                  fontWeight={1}
                />
              </Span>
            </StyledH3>
            <StyledH3>
              {t('save-equation.book-a-trip')}
              <Span>
                <Icon
                  svgWidth={['1.5rem', '2.25rem', '3.3rem', '3.3rem']}
                  svgHeight={['1.5rem', '2.25rem', '3.3rem', '3.3rem']}
                  colors={['black', 'black', 'black', 'black']}
                  iconName="TendPlus"
                  fontWeight={1}
                />
              </Span>
            </StyledH3>
            <StyledH3>
              {t('save-equation.see-the-sights')}
              <EqualsSpan>
                <Icon
                  svgWidth={['1.2rem', '1.8rem', '2.1rem', '2.1rem']}
                  svgHeight={['0.8rem', '1.2rem', '1.4rem', '1.4rem']}
                  colors={['black', 'black']}
                  iconName="TendEquals"
                  fontWeight={1}
                />
              </EqualsSpan>
            </StyledH3>
          </Col>
        </Row>

        <Row paddingBottom={['1.2rem', '1.5rem', '2.8rem', '2.8rem']}>
          <Rule size={16} />
        </Row>

        <Row paddingBottom={['5.5625rem']}>
          <Col xs={4} sm={8} md={8} lg={9}>
            <H3>{t('save-equation.get-paid')}</H3>
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default Equation;
