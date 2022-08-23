/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Photo: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="105" height="94" viewBox="0 0 105 94" fill="none" xmlns={XMLNS}>
      <path
        d="M96.16 22.58H104.66V94H23.66V80.09H91.11V36.52H13.55V69.73H0V22.58H55.65V0H96.16V22.58ZM59.5 51.8C61.3759 53.8214 62.4184 56.4772 62.4184 59.235C62.4184 61.9928 61.3759 64.6486 59.5 66.67C58.5731 67.6374 57.4601 68.4072 56.2278 68.9331C54.9956 69.459 53.6697 69.7301 52.33 69.7301C50.9903 69.7301 49.6644 69.459 48.4322 68.9331C47.1999 68.4072 46.0869 67.6374 45.16 66.67C43.2775 64.6519 42.2306 61.9948 42.2306 59.235C42.2306 56.4752 43.2775 53.8181 45.16 51.8C46.0869 50.8326 47.1999 50.0628 48.4322 49.5369C49.6644 49.011 50.9903 48.7399 52.33 48.7399C53.6697 48.7399 54.9956 49.011 56.2278 49.5369C57.4601 50.0628 58.5731 50.8326 59.5 51.8ZM82.74 14H69.2V22.63H82.74V14Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Photo;
