/** @format */

import React from 'react';
import styled from 'styled-components';
import { Theme, Paragraph } from '@tend/ui';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { StickyDisclaimer } from '@tend/shared/design/ui-kit';

const StickyFooterWrapper = styled.div`
  margin: 0;
  padding: 16px 0;
  background-color: ${Theme.colors.white};
  width: 100%;
  text-align: center;
`;

const StickyFooter = () => {
  const { t } = useTranslation();

  return (
    <StickyDisclaimer>
      <StickyFooterWrapper>
        <Paragraph>{t('meta.disclaimer')}</Paragraph>
      </StickyFooterWrapper>
    </StickyDisclaimer>
  );
};

export default StickyFooter;
