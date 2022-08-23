import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled, { css } from 'styled-components';
import { DownloadAppButton, H2 } from '@tend/ui';
import useAuth from '../../hooks/use-auth';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import usePrefixedWithBasePath from '../../hooks/usePrefixedWithBasePath';

export interface PayWallProps {
  canShow: boolean;
}

const StyledPayWall = styled.div<PayWallProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  background-image: linear-gradient(to bottom, transparent, #173d38, #173d38, #173d38);
  transition: opacity 500ms;
  z-index: 99999;

  ${(props) =>
    props.canShow
      ? css`
          visibility: visible;
          opacity: 1;
        `
      : css`
          visibility: hidden;
          opacity: 0;
        `}
`;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(6, [col-start] 1fr);
  grid-column-gap: 2.5rem;
  grid-row-gap: 6rem;
  grid-template-areas:
    '. . . . . .'
    'HD HD HD HD HD HD'
    'A A A A A A';

  @media (min-width: 836px) {
    grid-column-gap: 2.75rem;
  }

  @media (min-width: 1440px) {
    grid-template-areas:
      '. . . . . . . . .'
      '. . . . . . . . .'
      '. . . . . . . . .'
      '. . HD HD HD HD HD HD HD'
      '. . A A A A A A A';
    grid-template-columns: repeat(12, [col-start] 2fr);
  }
`;

const HeadlineContainer = styled.div`
  grid-area: HD;
`;

const Apps = styled.div`
  grid-area: A;
  grid-column-gap: 2.75rem;
`;

const BlockScroll = () => {
  useBodyScrollLock();

  return <i></i>;
};

const PayWall = () => {
  const {t} = useTranslation();
  const { user } = useAuth();
  const googlePlayImageUrl = usePrefixedWithBasePath(t('images.google-play'));
  const appleAppStoreImageUrl = usePrefixedWithBasePath(t('images.app-store'));

  const canShow = !user || !user.isLoggedIn;
  if (!canShow) {
    return null;
  }

  return (
    <>
      <BlockScroll />
      <StyledPayWall canShow={canShow}>
        <GridLayout>
          <HeadlineContainer>
            <H2 color="white">{t('pay-wall-header')}</H2>
            <H2 color="neonGreen.0">{t('Join Tend')}</H2>
          </HeadlineContainer>
          <Apps>
            <DownloadAppButton
              imgWidth={['95%', '10rem', '12rem', '14rem']}
              src={googlePlayImageUrl}
              href="https://play.google.com/store/apps/details?id=money.tend.app"
              fontSize="0.8rem"
              store="google play"
            />
            <DownloadAppButton
              imgWidth={['95%', '10rem', '12rem', '14rem']}
              src={appleAppStoreImageUrl}
              href="https://apps.apple.com/us/app/tend-money/id1554963043"
              fontSize="0.8rem"
              store="app store"
            />
          </Apps>
        </GridLayout>
      </StyledPayWall>
    </>
  );
};

export default PayWall;
