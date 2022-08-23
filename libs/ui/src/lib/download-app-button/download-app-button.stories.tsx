import React from 'react';
import { DownloadAppButton } from './download-app-button';

export default {
  component: DownloadAppButton,
  title: 'Badges/DownloadAppButton',
};

export const primary = () => {

  return (
    <div style={{ display: 'flex', gridRowGap: '50px'}}>
      <DownloadAppButton store="app store" />
      <DownloadAppButton store="google play" />
    </div>
  );
};
