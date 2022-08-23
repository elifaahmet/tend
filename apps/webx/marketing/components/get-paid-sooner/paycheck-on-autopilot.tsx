/** @format */

import React from 'react';
import styled from 'styled-components';
import { grid, space } from 'styled-system';

import {
  H3,
  Image,
  TStemLayout,
  BodyButton,
  Theme,
  HeadlineBody,
} from '@tend/ui';

const OverflowTopImage = styled.div`
  position: relative;
  z-index: 1;
  top: -2rem;
  left: -20%;
  height: 117%;
  display: flex;
  width: 120%;
  margin-bottom: 0;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    left: auto;
    top: -12%;
    width: 100%;
    margin-bottom: -18%;
  }
`;

const OverflowLeftImage = styled.div`
  position: relative;
  z-index: 1;
  top: auto;
  left: -20%;
  height: 117%;
  width: 120%;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    left: auto;
    width: 100%;
  }
`;

interface GridColumnDivProps {
  gridRowGap: Array<string> | string;
  reverse?: boolean;
}

const GridColumnDiv = styled.div<GridColumnDivProps>`
  ${grid}
  display: flex;
  padding-bottom: 1rem;
  flex-direction: ${(props: GridColumnDivProps) =>
    props.reverse ? 'column-reverse' : 'column'};
  grid-row-gap: 1.2rem;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    flex-direction: column;
  }
`;

const getLeftChild = () => {
  return (
    <GridColumnDiv gridRowGap={['1.2rem', '3rem', '5.5rem']}>
      <OverflowTopImage>
        <Image
          src="get-paid-sooner/moduleTwo1.jpg"
          resizeMode="cover"
          imgWidth="100%"
        />
      </OverflowTopImage>
      <GridColumnDiv gridRowGap={['1.2rem', '2rem', '3.2rem']}>
        <H3 textTransform="uppercase" fontWeight="normal" color="black">
          Comes with surprise perks
        </H3>
        <BodyButton
          variant="medium"
          buttonText="learn more"
          ctaLink
          ctaLinkProps={{
            href: 'www.example.com',
            textTransform: 'uppercase',
            color: 'black',
          }}
          color="black"
        >
          We believe in always adding chocolate, and in sharing the wealth when
          we can. You’ll earn a Tend Share for turning on direct deposit, and
          that share will earn you cash every month.
        </BodyButton>
      </GridColumnDiv>
    </GridColumnDiv>
  );
};

const getRightChild = () => {
  return (
    <GridColumnDiv gridRowGap={['1.2rem', '3rem', '7.5rem']} reverse>
      <HeadlineBody
        titleVariant="h3"
        bodyVariant="b2"
        title="Your paycheck, on autopilot"
        gridRowGap={['1.2rem', '1.2rem', '2rem', '2.2rem']}
      >
        Set up direct deposit right from your Tend app in less time than it
        takes to steep the tea.
      </HeadlineBody>
      <OverflowLeftImage>
        <Image
          src="get-paid-sooner/moduleTwo2.jpg"
          resizeMode="cover"
          imgWidth="100%"
        />
      </OverflowLeftImage>
    </GridColumnDiv>
  );
};

export const ModuleOne = () => {
  return (
    <TStemLayout
      verticalLineColor={[
        'defaultRed',
        'defaultRed',
        'defaultRed',
        'defaultYellow',
      ]}
      leftChild={getLeftChild()}
      rightChild={getRightChild()}
      variant="center"
      whenShrink="right"
      lowerBg="white"
    />
  );
};

export default ModuleOne;
