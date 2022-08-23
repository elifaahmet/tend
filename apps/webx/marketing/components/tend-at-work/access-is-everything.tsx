/** @format */

import React from 'react';
import Link from 'next/link';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import {
  Col,
  TStemLayout,
  Image,
  Theme,
  HeadlineBody,
  CTALink,
} from '@tend/ui';
import Space from '../layout/space';

const OverflowImage = styled.div`
  width: 100%;
  position: relative;
  & > img {
    max-width: 100%;
  }
  z-index: 1;
  left: -10%;
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    left: 0rem;
  }
`;

const GridColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  > * {
    margin-bottom: 1.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  @media only screen and (min-width: ${Theme.breakpoints[1]}) {
    > * {
      margin-bottom: 2.2rem;
    }
  }
  @media only screen and (min-width: ${Theme.breakpoints[2]}) {
    > * {
      margin-bottom: 3rem;
    }
  }
`;

const getImage = (t) => {
  return (
    <Col lg="11" align="flex-end">
      <OverflowImage>
        <Image
          src={t('access-is-everything.image')}
          resizeMode="cover"
          imgWidth={['100%', '100%', '100%', '90%']}
        />
      </OverflowImage>
    </Col>
  );
};

const getRightChild = (t) => {
  return (
    <Space
      marginTop={['1.75rem', '1.75rem', '1.75rem', '0']}
      marginBottom={['1.2rem', '1.2rem', '2rem', '3rem']}
    >
      <GridColumnDiv>
        <HeadlineBody
          title={t('access-is-everything.headline')}
          color="black"
          gridRowGap={['1.2rem', '1.2rem', '2rem', '3rem']}
          bodyVariant="b2"
          titleVariant="h3"
        >
          {t('access-is-everything.body')}
        </HeadlineBody>
        <Space marginTop={['1.2rem', '1.2rem', '2rem', '0rem']}>
          <Link href={t('access-is-everything.cta.url')}>
            <CTALink textTransform="uppercase">
              {t('access-is-everything.cta.label')}
            </CTALink>
          </Link>
        </Space>
      </GridColumnDiv>
    </Space>
  );
};

export const AccessIsEverything = () => {
  const { t } = useTranslation('tend-at-work');
  return (
    <TStemLayout
      padding="2rem"
      verticalLineColor="defaultYellow"
      leftChild={getImage(t)}
      rightChild={getRightChild(t)}
      variant="center"
      whenShrink="right"
      lowerBg="white"
    />
  );
};

export default AccessIsEverything;
