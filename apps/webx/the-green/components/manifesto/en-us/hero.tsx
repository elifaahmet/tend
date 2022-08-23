import React from 'react';
import styled from 'styled-components'
import { H2, Image } from '@tend/ui';

interface IHero {
  headline: string;
  subHeadline: string;
  body?: string;
  image: string;
  leftCol: number[];
  rightCol: number[];
}

interface IGrid {
  left: number[];
  right: number[];
}

const GridLayout = styled.div<IGrid>`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-column-gap: 2.8125rem;
  grid-row-gap: 3rem;
  padding: 2.8125rem 0;


  @media (min-width: 836px) {
    grid-column-gap: 3.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(12, [col-start] 1fr);
  }
`;

const HeadlineContainer = styled.div`
  grid-column: 1 / span 6;
  grid-row: 1;
`;

const ImageContainer = styled.div`
  grid-column: 1 / span 6;
  grid-row: 2;
  img {
    max-width: 100%;
  }
  @media (min-width: 1440px) {
    grid-column: 5 / span 8;
    grid-row: 1;
  }
`;


const WelcomeBoard = ({headline, subHeadline, image, leftCol, rightCol }: IHero) => {
  return (
    <GridLayout left={leftCol} right={rightCol}>
      <ImageContainer>
        <Image
          imgHeight={['100%']}
          imgWidth={['100%']}
          src={image}
        />
      </ImageContainer>
      <HeadlineContainer>
        <H2 color={["neonGreen.0", "neonGreen.0", "neonGreen.0", "white"]}>{headline}</H2>
        <H2 color="neonGreen.0">{subHeadline}</H2>
      </HeadlineContainer>
    </GridLayout>
  );
};

export default WelcomeBoard;
