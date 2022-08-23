/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { color } from 'styled-system';
import Space from '../layout/space';

import { Paragraph, Image, H3, Theme, Layout, RectangleProps } from '@tend/ui';
import styled from 'styled-components';

const StyledGrid = styled.div`
  display: grid;
  grid-row-gap: 0.5rem;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-template-areas:
    'I I I I I I'
    'LL . RL RL RL RL'
    '. VL H H H .'
    '. VL P P P .';
  @media (min-width: ${Theme.breakpoints[1]}) {
    grid-row-gap: 0.75rem;
  }
  @media (min-width: ${Theme.breakpoints[2]}) {
    grid-template-columns: repeat(12, [col-start] 1fr);
    grid-row-gap: 1rem;
    grid-template-areas:
      'I I I I I I I I I I I I'
      'LL LL LL LL . RL RL RL RL RL RL RL'
      'H H H H VL P P P P P . .';
  }
`;

interface StyledHRProps {
  bg: string;
}

const StyledHR = styled.hr<StyledHRProps>`
  margin-block-start: 0;
  margin-block-end: 0;
  border-width: 0;
`;
const StyledHorizontalHR = styled(StyledHR)`
  ${color}
  width: 100%;
  height: 0.5rem;
  @media (min-width: ${Theme.breakpoints[1]}) {
    height: 0.75rem;
  }
  @media (min-width: ${Theme.breakpoints[1]}) {
    height: 1rem;
  }
`;

const StyledVerticalHR = styled(StyledHR)`
  ${color}
  height: 100%;
  width: 0.5rem;
  @media (min-width: ${Theme.breakpoints[1]}) {
    width: 0.75rem;
  }
  @media (min-width: ${Theme.breakpoints[1]}) {
    width: 1rem;
  }
`;

const ImageBlock = styled.div`
  grid-area: I;
`;

const HeadlineBlock = styled.div`
  grid-area: H;
`;

const ParagraphBlock = styled.div`
  grid-area: P;
`;

const LeftLineBlock = styled.div`
  grid-area: LL;
`;
const RightLineBlock = styled.div`
  grid-area: RL;
`;
const VerticalLineBlock = styled.div`
  grid-area: VL;
  grid-row: 3 / 8;
`;

export const Hero = () => {
  const { t } = useTranslation('about');

  return (
    <Layout>
      <StyledGrid>
        <ImageBlock>
          <Image src={t('hero.img')} imgWidth="100%" />
        </ImageBlock>
        <LeftLineBlock>
          <StyledHorizontalHR bg="black" />
        </LeftLineBlock>
        <RightLineBlock>
          <StyledHorizontalHR bg="black" />
        </RightLineBlock>
        <VerticalLineBlock>
          <StyledVerticalHR bg="black" />
        </VerticalLineBlock>
        <HeadlineBlock>
          <H3 color="black">{t('hero.headline')}</H3>
        </HeadlineBlock>
        <ParagraphBlock>
          <Paragraph variant="b2" color="black">
            {t('hero.sub-copy')}
          </Paragraph>
        </ParagraphBlock>
      </StyledGrid>
    </Layout>
  );
};

export default Hero;
