import React from 'react';
import styled from 'styled-components';
import BaseLabel from './base-label';

import { Icon } from '@tend/ui';
import { useTranslation } from '@tend/webx/utils/next-i18next';

export const StyledMembersContent = styled(BaseLabel)`
  display: inline-flex;
  align-items: center;
  font-weight: bold;

  span {
    margin-left: 0.35rem;
  }
`;

export const MembersContent = (props) => {
  const { t } = useTranslation();
  return (
  <StyledMembersContent { ...props }>
    <Icon
        fontSize={['1rem']}
        iconName="Lock"
        color="white" />
        <span>{t('Members Content')}</span>
  </StyledMembersContent>
  );
}

MembersContent.defaultProps = {
  bg: 'green.1',
  color: 'white'
};

export default MembersContent;
