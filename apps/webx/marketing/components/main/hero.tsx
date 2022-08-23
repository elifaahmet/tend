/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';
import { color } from 'styled-system';

import {
  Layout,
  H2,
  Paragraph,
  Image,
  Theme,
  DownloadAppButton,
  Rule,
} from '@tend/ui';
import Grid from '../layout/grid';

const OverflowImage = styled.div`
  width: 100%;
  position: relative;
  z-index: 1;

  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    left: -30%;
    margin-top: 3rem;
    width: 130%;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  a:first-child {
    margin-right: 1rem;
  }

  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    margin-left: 0;
    & {
      a:first-child {
        align-self: flex-start;
      }
      a:last-child {
        align-self: flex-end;
        margin-top: 0;
      }
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    margin-block-end: 12.5rem;
  }
`;

const UpperGridLayout = styled(Grid)`
  grid-template-areas:
    'LR LR LR LR RR RR'
    '.  .  .  .  . .';

  grid-row-gap: 1.2rem;
  margin-block-end: 1.4065rem;

  @media (min-width: ${Theme.breakpoints[2]}) {
    grid-template-areas:
      'LR LR LR LR LR LR RR  RR RR RR RR RR'
      '.  .  .  .  .  .  .  .  .  .  .  .';
    grid-row-gap: 3.2rem;
    margin-block-end: 1.6rem;
  }
`;

const RGridArea = styled.div`
  &[data-area|='LR'] {
    grid-area: LR;
  }
  &[data-area|='RR'] {
    grid-area: RR;
  }
  &[data-area|='VR'] {
    grid-area: VR;
  }
`;

interface VerticalRuleProps {
  bg: string;
}

const VerticalLine = styled.div<VerticalRuleProps>`
  position: relative;
  height: 100%;
  &:before {
    ${color}
    content: '';
    position: absolute;
    display: block;
    width: 0.5625rem;
    left: calc(66.66% + 0.276125rem);
    height: calc(100% + 1.4065rem);
    top: -1.4065rem;
  }
  @media (min-width: ${Theme.breakpoints[2]}) {
    &:before {
      width: 0.75rem;
      left: calc(50% - 0.375rem);
      height: calc(100% + 1.6rem);
      top: -1.6rem;
    }
  }
`;

const LowerGridLayout = styled(Grid)`
  grid-template-areas:
    'TB TB TB TB TB TB'
    'TB TB TB TB TB TB'
    'TB TB TB TB TB TB'
    'TB TB TB TB TB TB'
    '.  .  .  .  . .'
    'IMG IMG IMG IMG IMG IMG';

  grid-row-gap: 1.2rem;

  @media (min-width: ${Theme.breakpoints[1]}) {
    grid-row-gap: 2rem;
  }
  @media (min-width: ${Theme.breakpoints[2]}) {
    grid-template-areas:
      'TB TB TB TB TB TB IMG IMG IMG IMG IMG IMG'
      'TB TB TB TB TB TB IMG IMG IMG IMG IMG IMG'
      'TB TB TB TB TB TB IMG IMG IMG IMG IMG IMG'
      'TB TB TB TB TB TB IMG IMG IMG IMG IMG IMG'
      '.  .  .  .  .  .  . .   .   .   .   .';
    grid-row-gap: 3.2rem;
  }
`;

const GridArea = styled.div`
  &[data-area|='text-block'] {
    display: flex;
    flex-direction: column;
    &:last-child {
      margin-block-end: 0;
    }
    & > * {
      margin-block-end: 2.2rem;
    }
    h2 {
      width: 50%;
    }
    p {
      width: 60%;
    }

    @media (min-width: ${Theme.breakpoints[2]}) {
      h2 {
        width: 100%;
      }
    }
    z-index: 2;
    grid-area: TB;
  }
  &[data-area|='image'] {
    z-index: 1;
    grid-area: IMG;
  }
`;

export const Hero = () => {
  const { t } = useTranslation('main');

  return (
    <>
      <Layout bg="white">
        <UpperGridLayout>
          <RGridArea data-area="LR">
            <Rule size={12} ruleColor="red.0" />
          </RGridArea>
          <RGridArea data-area="RR">
            <Rule size={12} ruleColor="orange.0" />
          </RGridArea>
        </UpperGridLayout>
      </Layout>
      <Layout bg={'offWhite'}>
        <VerticalLine bg="yellow.0">
          <LowerGridLayout>
            <GridArea data-area="text-block">
              <H2>{t('hero.headline')}</H2>
              <Paragraph variant="b2">{t('hero.sub-copy')}</Paragraph>
              <Paragraph bold variant="b2">
                {t('hero.bold-sub')}
              </Paragraph>
              <ButtonsWrapper>
                <DownloadAppButton
                  imgWidth={['10rem']}
                  src={t('common:images.app-store')}
                  href={t('common:app-urls.app-store')}
                  fontSize="0.8rem"
                  resizeMode={'fill'}
                  imgHeight={['3.38rem']}
                  store="app store"
                />
                <DownloadAppButton
                  imgWidth={['11.3rem']}
                  src={t('common:images.google-play')}
                  href={t('common:app-urls.google-play')}
                  fontSize="0.8rem"
                  resizeMode={'fill'}
                  imgHeight={['3.38rem']}
                  store="google play"
                />
              </ButtonsWrapper>
            </GridArea>
            <GridArea data-area="image">
              <OverflowImage>
                <Image src={t('hero.img')} imgWidth="100%" />
              </OverflowImage>
            </GridArea>
          </LowerGridLayout>
        </VerticalLine>
      </Layout>
    </>
  );
};

export default Hero;
