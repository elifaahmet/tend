/** @format */

import React from 'react';

export interface GooglePlayLogoProps {
  fill: string;
}

const GooglePlayLogo = (props: GooglePlayLogoProps) => (
  <svg
    width="12"
    height="13"
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.323242 12.7981L5.97555 7.14575L7.99424 9.16443L1.29221 12.8788C1.04997 13.0403 0.726979 13.0403 0.484737 12.8788C0.403989 12.8788 0.323242 12.7981 0.323242 12.7981Z"
      fill={props.fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.41007 6.58072L0 11.91V1.17065L5.41007 6.58072Z"
      fill={props.fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.80096 4.31958L11.4656 5.77303C11.7079 5.93453 11.8694 6.17677 11.8694 6.49976C11.8694 6.82275 11.7079 7.06499 11.4656 7.22648L8.72022 8.76068L6.54004 6.5805C6.54004 6.5805 8.80096 4.31958 8.80096 4.31958Z"
      fill={props.fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.242188 0.282616L0.403682 0.121121C0.645924 -0.0403736 0.968913 -0.0403736 1.21115 0.121121L8.07468 3.91624L5.97525 6.01567L0.242188 0.282616Z"
      fill={props.fill}
    />
  </svg>
);

export default GooglePlayLogo;
