/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { Image, IconHeadlineBody, Layout, H3 } from '@tend/ui';

interface ValueProps {
  map(arg0: (prop: ValueProps, i: string) => JSX.Element): React.ReactNode;
  label: string;
  body: string;
  disclaimer?: string;
  comingSoonInner: boolean;
}

const StyledRewards = styled.div`
  padding: 1.43rem;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 1rem;

  @media (min-width: 836px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1rem;
  }
`;

const TitleContainer = styled.div`
  grid-row: 2;
  @media (min-width: 836px) {
    grid-row: 1;
    grid-column: 1;
    margin-top: 20%;
  }
`;

const InfoContainer = styled.div`
  grid-row: 3;
  margin-top: -130%;
  @media (min-width: 836px) {
    grid-row: 1 / span 2;
    grid-column: 2;
    margin-top: 20%;
  }
`;

const ImageAspectRatioContainer = styled.div`
  position: relative;
  grid-row: 1;

  @media (min-width: 836px) {
    grid-row: 2;
    grid-column: 1;
    margin-top: -50%;
  }
`;

const ImageAspectRatioInner = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const MobileBankingValue = () => {
  const { t } = useTranslation('invitacion');

  const valueProps: ValueProps = t('value-props.value-props', {
    returnObjects: true,
  });

  return (
    <Layout rowOverlay={true} bg="offWhite">
      <StyledRewards>
        <ImageAspectRatioContainer>
          <ImageAspectRatioInner>
            <Image
              src={t('image')}
              resizeMode="cover"
              imgWidth={['100%', '100%', '100%', '90%']}
            />
          </ImageAspectRatioInner>
        </ImageAspectRatioContainer>
        <TitleContainer>
          <H3 color="black"> {t('value-props.title')} </H3>
        </TitleContainer>
        <InfoContainer>
          {valueProps.map((prop, index) => {
            return (
              <IconHeadlineBody
                title=""
                key={index}
                layout="vertical"
                variant="small"
              >
                {prop.body}
              </IconHeadlineBody>
            );
          })}
        </InfoContainer>
      </StyledRewards>
    </Layout>
  );
};

export default MobileBankingValue;
