/** @format */

import React, { useEffect, useState } from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { space, grid } from 'styled-system';
import ComingSoon from '../modules/coming-soon';

import { TStemLayout, Image, H3, Paragraph, Theme } from '@tend/ui';
import Space from '../layout/space';

const GridColumnDiv = styled.div`
  ${grid};
  ${space};
  display: flex;
  flex-direction: column;
  width: 90%;
  justify-content: flex-start;
  z-index: 2;
  > * {
    margin-bottom: 2.5rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 3.2rem;
    }
    & :last-child {
      margin-bottom: 0rem;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 20%;

  & > img {
    max-width: 90%;
  }

  & img:nth-child(2) {
    position: absolute;
    max-width: 80%;
    left: 20%;
    bottom: 50%;
  }
`;
const ImageDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    justify-content: flex-end;
    margin-top: 25%;
  }
`;

const getRightChild = (t, comingSoon: boolean, locale: string) => {
  return (
    <Space marginTop={['-10%', '-10%', '-10%', '0']}>
      <GridColumnDiv>
        <H3 textTransform="uppercase" fontWeight="normal" color="offWhite">
          {t('dog-just-ate.headline')}
        </H3>
        <Paragraph
          marginTop="0rem"
          marginBottom="0rem"
          variant="b2"
          color="offWhite"
        >
          {comingSoon && locale !== 'es-MX' ? <ComingSoon /> : null}
          {t('dog-just-ate.body')}
        </Paragraph>
      </GridColumnDiv>
    </Space>
  );
};

export const DogJustAte = () => {
  const { t } = useTranslation('line-of-credit');
  const { locale } = useRouter();
  const [balanceImg, setBalanceImg] = useState<string>('');

  useEffect(() => {
    setBalanceImg(t('dog-just-ate.layered-image'));
  }, [locale]);

  const getImage = (t) => {
    return (
      <ImageDiv>
        <ImageContainer>
          <Image
            src={t('dog-just-ate.image')}
            imgWidth={['100%', '100%', '100%', '100%']}
          />

          <Image src={balanceImg} imgWidth={['50%', '50%', '50%', '50%']} />
        </ImageContainer>
      </ImageDiv>
    );
  };

  return (
    <TStemLayout
      verticalLineColor="defaultRed"
      leftChild={getImage(t)}
      rightChild={getRightChild(t, true, locale)}
      variant="center"
      whenShrink="right"
      lowerBg="defaultGreen"
      padding="2rem"
    />
  );
};

export default DogJustAte;
