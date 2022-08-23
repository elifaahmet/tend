/** @format */

import React from 'react';
import styled from 'styled-components';
import { grid, space, position, layout } from 'styled-system';

import { TLayout, H2, H5, Button, Image, Theme, HeadlineBody } from '@tend/ui';

const OverflowImage = styled.div<{
  left?: Array<string>;
  right?: Array<string>;
  bottom?: Array<string>;
  top?: Array<string>;
  marginBottom?: Array<string>;
}>`
  ${position};
  ${space};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

const GridColumnDiv = styled.div<{
  gridRowGap?: Array<string>;
  paddingBottom?: Array<string>;
  marginBottom?: Array<string>;
  width?: string | Array<string>;
  reverse?: boolean;
}>`
  ${grid};
  ${space};
  ${layout};
  display: flex;
  flex-direction: column;
  z-index: 2;
  flex-direction: ${(props) => (props.reverse ? 'column-reverse' : 'column')};
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    flex-direction: column;
  }
`;

const GridRowDiv = styled.div<{
  gridRowGap?: Array<string>;
  gridColumnGap?: Array<string>;
  paddingBottom?: Array<string>;
  marginTop?: Array<string>;
  width?: string | Array<string>;
}>`
  ${grid};
  ${space};
  ${layout};
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    flex-direction: row;
  }
  z-index: 2;
`;

const getLeftUpperImage = () => {
  return (
    <OverflowImage
      right={['-15%', '-20%', '-20%', '0rem']}
      top={['-1rem', '-1rem', '-1rem', '10rem']}
      marginBottom={['1rem', '1rem', '1rem', '0rem']}
    >
      <Image
        src="/tend-shares/hero-left1.png"
        resizeMode="cover"
        imgWidth={['110%', '110%', '140%', '160%']}
      />
    </OverflowImage>
  );
};

const getLeftUpper = () => {
  return (
    <GridRowDiv>
      <GridColumnDiv
        gridRowGap={['1.2rem', '1.2rem', '2rem', '2.2rem']}
        width={['100%', '100%', '100%', '100%']}
        marginBottom={['2rem', '2rem', '2rem', '0rem']}
      >
        <H2>Grow your wealth with Tend Shares</H2>
        <H5 textTransform="none" fontWeight="normal">
          Tend Shares, our revenue sharing program, adds an entirely new revenue
          stream to your finances.
        </H5>
        <div></div>
        <Button
          variant="medium"
          bg="defaultMagenta"
          color="black"
          onClick={() => {
            return;
          }}
          textTransform="uppercase"
        >
          Join Now
        </Button>
      </GridColumnDiv>
      {getLeftUpperImage()}
    </GridRowDiv>
  );
};

const getLeftLowerImage = () => {
  return (
    <OverflowImage right={['-10%', '-10%', '-20%', '-20%']}>
      <Image
        src="/tend-shares/hero-left2.jpeg"
        resizeMode="cover"
        imgWidth={['110%', '110%', '140%', '160%']}
        imgHeight={['100%', '100%', '100%', '100%']}
      />
    </OverflowImage>
  );
};

const getLeftLower = () => {
  return (
    <GridRowDiv gridRowGap={['2rem', '2rem', '2rem', '0rem']}>
      <HeadlineBody
        title="LeBron & AD. Oat milk & coffee. Your money & Tend."
        color="black"
        gridRowGap={['1.2rem', '1.2rem', '2rem', '5rem']}
        bodyVariant="b2"
        titleVariant="h3"
      >
        We believe together is always better off. And this whole banking thing
        works best when it’s community-focused, and community-led. That’s why we
        share our revenue with our community through Tend Shares.
      </HeadlineBody>
      {getLeftLowerImage()}
    </GridRowDiv>
  );
};

const getLeftChild = () => {
  return (
    <GridColumnDiv
      gridRowGap={['1.2rem', '1.2rem', '2rem', '5rem']}
      marginBottom={['1.2rem', '1.2rem', '2rem', '5rem']}
    >
      {getLeftUpper()}
      {getLeftLower()}
    </GridColumnDiv>
  );
};

export const Hero = () => {
  return (
    <TLayout
      xs={4}
      sm={8}
      md={8}
      lg={12}
      leftLineColor="defaultMagenta"
      rightLineColor="defaultYellow"
      verticalLineColor="defaultOrange"
      leftChild={getLeftChild()}
      variant="left"
      whenShrink="left"
      upperBg="white"
      lowerBg="offWhite"
    />
  );
};

export default Hero;
