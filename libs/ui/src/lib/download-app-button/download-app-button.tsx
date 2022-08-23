import React from 'react';
import styled from 'styled-components';

import Anchor from '../anchor/anchor';

import { Image } from '../image/image';


interface DownloadAppButtonProps{
  store: 'google play' | 'app store';
  href?: string;
  fontSize?: string | Array<string>;
  src?: string;
  resizeMode?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  imgWidth?: string | Array<string>;
  imgHeight?: string | Array<string>;
}

const badgeMap = {
  'google play': 'main/google-play-store.svg',
  'app store': 'main/apple-app-store.svg',
};


export const DownloadAppButton = (props: DownloadAppButtonProps) => {
  return (
      <Anchor
        target="_blank"
        {...props}
      >
        <Image
          src={props.src || badgeMap[props.store]}
          resizeMode={props.resizeMode}
          imgWidth={props.imgWidth}
          imgHeight={props.imgHeight}
        />
      </Anchor>
  );
};

DownloadAppButton.defaultProps = {
  imgWidth: ['10.875rem','10.875rem', '13.5rem', '15.25rem'],
  resizeMode: 'cover',
};

export default DownloadAppButton;
