/** @format */

import React from 'react';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import styled from 'styled-components';

import { TLayout, H3, Paragraph, Icon } from '@tend/ui';
import Space from '../layout/space';

const GridColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  > * {
    margin-bottom: 1.2rem;
  }
  & :last-child {
    margin-bottom: 0rem;
  }
  z-index: 2;
`;

const StyledIcon = styled(Icon)`
  margin-left: -0.4rem;
`;

const getLeftChild = (t) => {
  return (
    <Space marginBottom={['2.8125rem', '2.8125rem', '5.125rem', '5.125rem']}>
      <GridColumnDiv>
        <StyledIcon
          fontSize={['3rem', '4rem', '5rem', '5rem']}
          color="white"
          iconName="International"
        />
        <Paragraph color="white" variant="b2" bold>
          {t('phone.headline')}
        </Paragraph>
        <H3 textTransform="none" fontWeight="normal" color="white">
          {t('phone.body')}
        </H3>
      </GridColumnDiv>
    </Space>
  );
};

export const ContactInfo = () => {
  const { t } = useTranslation('get-in-touch');
  return (
    <TLayout
      leftLineColor="defaultRed"
      rightLineColor="defaultOrange"
      verticalLineColor="defaultYellow"
      leftChild={getLeftChild(t)}
      variant="left"
      whenShrink="left"
      upperBg="defaultGreen"
      lowerBg="defaultGreen"
      innerMarginBottom={['1.1875rem', '1.1875rem', '1.1875rem', '1.875rem']}
    />
  );
};

export default ContactInfo;
