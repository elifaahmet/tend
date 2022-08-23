/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { position, space } from 'styled-system';

import { Col, TStemLayout, Image, Theme, HeadlineBody } from '@tend/ui';
import ComingSoon from '../modules/coming-soon';
import Space from '../layout/space';

const OverflowImage = styled.div`
  ${position};
  ${space};
  & > img {
    max-width: 100%;
  }
  left: 0rem;
  width: 100%;
  position: relative;
  z-index: 1;
`;

const GridColumnDiv = styled.div`
  > * {
    margin-bottom: 1.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-bottom: 3.2rem;
    }
  }
  display: flex;
  flex-direction: column;
  width: 95%;
  z-index: 2;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 5rem;
    }
  }
`;

const getImage = (t) => {
  return (
    <Col lg="11" align="flex-end">
      <OverflowImage>
        <Image
          src={t('mexico-transfers.image')}
          resizeMode="cover"
          imgWidth={['90%', '85%', '80%', '90%']}
        />
      </OverflowImage>
    </Col>
  );
};

const getRightChild = (t, comingSoon: boolean, locale: string) => {

  return (
    <Space
      marginTop={['2.75rem', '2.75rem', '3.75rem', '5rem']}
      marginBottom={['2.75rem', '2.75rem', '3.75rem', '5rem']}
    >
      <GridColumnDiv>
        <HeadlineBody
          title={t('mexico-transfers.headline')}
          color="black"
          gridRowGap={['1.2rem', '1.2rem', '2rem', '5rem']}
          bodyVariant="b2"
          titleVariant="h3"
        >
          <div
            dangerouslySetInnerHTML={{ __html: t('mexico-transfers.body') }}
          ></div>
        </HeadlineBody>
      </GridColumnDiv>
    </Space>
  );
};

export const MexicoTransfers = () => {
  const { t } = useTranslation('international-transfers');
  const { locale } = useRouter();

  return (
    <TStemLayout
      verticalLineColor="defaultRed"
      leftChild={getImage(t)}
      rightChild={getRightChild(t, true, locale)}
      variant="center"
      whenShrink="right"
      lowerBg="white"
    />
  );
};

export default MexicoTransfers;
