/** @format */

import React from 'react';
import styled from 'styled-components';
import { grid } from 'styled-system';

import { H3, Image, TStemLayout, BodyButton, Theme } from '@tend/ui';

const OverflowTopImage = styled.div`
  position: relative;
  z-index: 1;
  top: auto;
  left: -20%;
  height: 117%;
  width: 120%;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    left: auto;
    top: -7%;
    width: 100%;
    margin-bottom: -7%;
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
}

const GridColumnDiv = styled.div<GridColumnDivProps>`
  ${grid}
  display: flex;
  flex-direction: column;
  grid-row-gap: 1.2rem;
`;

const getLeftUpperImage = () => {
  return (
    <GridColumnDiv gridRowGap={['1.2rem', '3rem', '5.5rem']}>
      <OverflowTopImage>
        <Image
          src="/tend-at-work/module-one1.jpeg"
          resizeMode="cover"
          imgWidth="100%"
        />
      </OverflowTopImage>
      <GridColumnDiv gridRowGap={['1.2rem', '2rem', '3.2rem']}>
        <H3 textTransform="uppercase" fontWeight="normal" color="black">
          Put their money to work
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
          With Tend, your employees can stretch their money further with
          generous cash back deals at all kinds of retailers (even local ones).
          Plus, they’ll get access to our revenue sharing collective, Tend
          Shares, which doles out monthly payments for helping grow the
          community. Employers are also eligible to earn Tend Shares, so you can
          grow your revenue while making your employees’ richer
        </BodyButton>
      </GridColumnDiv>
      <OverflowLeftImage>
        <Image
          src="/tend-at-work/module-one3.jpeg"
          resizeMode="cover"
          imgWidth="100%"
        />
      </OverflowLeftImage>
    </GridColumnDiv>
  );
};

const getRightChild = () => {
  return (
    <GridColumnDiv gridRowGap={['1.2rem', '3rem', '5.5rem']}>
      <GridColumnDiv gridRowGap={['1.2rem', '2rem', '3.2rem']}>
        <H3 textTransform="uppercase" fontWeight="normal" color="black">
          Be a cut above the rest
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
          Everybody banks. But not everybody has access to top-notch mobile
          banking essentials and top-of-the-line rewards. We want to change
          that. When you hook your team up with Tend, you’re helping set them up
          for financial success. And that’s something everybody can be happy
          about.
        </BodyButton>
      </GridColumnDiv>
      <OverflowLeftImage>
        <Image
          src="/tend-at-work/module-one2.jpeg"
          resizeMode="cover"
          imgWidth="100%"
        />
      </OverflowLeftImage>
      <GridColumnDiv gridRowGap={['1.2rem', '2rem', '3.2rem']}>
        <H3 textTransform="uppercase" fontWeight="normal" color="black">
          Help them build credit history
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
          Every Tend membership includes a secured line of credit worth 75% of
          the amount in a member’s savings account. Part backup plan, part dream
          house plan.
        </BodyButton>
      </GridColumnDiv>
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
      leftChild={getLeftUpperImage()}
      rightChild={getRightChild()}
      variant="center"
      whenShrink="right"
      lowerBg="white"
    />
  );
};

export default ModuleOne;
