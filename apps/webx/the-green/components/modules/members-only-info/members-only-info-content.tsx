import React from 'react';
import styled from 'styled-components';
import { color } from 'styled-system';
import { Paragraph } from '@tend/ui';
import { useTranslation } from '@tend/webx/utils/next-i18next';

interface FlexLayoutProps {
  bg: string[];
}

const FlexLayout = styled.div<FlexLayoutProps>`
  display: flex;
  flex-direction: column;
  min-height: 8.5rem;
  min-width: 18.5rem;
  padding: 1rem;
  ${color}
`;

const Title = styled(Paragraph)`
  margin-block-end: 1rem;
`;

const Content = styled(Paragraph)`
  margin-block-end: 1rem;
  padding-top: 1rem;
`;

const MembersOnlyInfoContent = () => {
  const { t } = useTranslation();
  return (
    <FlexLayout bg={['white']}>
      <Title bold fontSize={['1.50rem']} color="black" textTransform="uppercase">
        {t('member-content.title')}
      </Title>
      <Content fontSize={['0.80rem']}>
      {t('member-content.body')}
      </Content>
    </FlexLayout>
  );
};

export default MembersOnlyInfoContent;
