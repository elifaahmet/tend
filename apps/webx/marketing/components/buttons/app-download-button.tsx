/*** @format **/
/*** @tech-debt **/
import React, { useState } from 'react';
import { Button, Theme } from '@tend/ui';
import styled from 'styled-components';
import AppleLogo from './svg/AppleLogo';
import GooglePlayLogo from './svg/GooglePlayLogo';
import { useTranslation } from '@tend/webx/utils/next-i18next';
import { useRouter } from 'next/router';

const TextSpan = styled.span`
  padding-left: 12px;
`;

export interface AppDownloadButtonProps {
  apple?: boolean;
  google?: boolean;
}

const AppDownloadButton = (props: AppDownloadButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const isSpanish = !!locale.match(/es/i);

  const appleHandler = () => window.open(t('app-urls.app-store'), '_blank');
  const googleHandler = () => window.open(t('app-urls.google-play'), '_blank');

  return (
    <Button
      style={isSpanish ? { width: 220 } : {}}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={props.apple ? appleHandler : googleHandler}
    >
      {props.apple && (
        <AppleLogo fill={isHovered ? Theme.colors.white : Theme.colors.black} />
      )}
      {props.google && (
        <GooglePlayLogo
          fill={isHovered ? Theme.colors.white : Theme.colors.black}
        />
      )}
      <TextSpan>{t('cta.try-it-free')}</TextSpan>
    </Button>
  );
};

AppDownloadButton.defaultProps = {
  apple: false,
  google: false,
};

export default AppDownloadButton;
