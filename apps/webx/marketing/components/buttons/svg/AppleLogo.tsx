/** @format */

import React from 'react';

export interface AppleLogoProps {
  fill: string;
}

const AppleLogo = (props: AppleLogoProps) => (
  <svg
    width="11"
    height="13"
    viewBox="0 0 11 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.20983 0.260001C8.20983 0.912034 7.97234 1.51879 7.49736 2.08026C6.92734 2.75007 6.23621 3.13474 5.48464 3.07431C5.4744 2.99279 5.46965 2.91068 5.47043 2.82852C5.47043 2.20518 5.74109 1.53538 6.22554 0.990237C6.46777 0.712463 6.77424 0.484454 7.14469 0.299356C7.51514 0.114258 7.86781 0.0177735 8.19561 0C8.20272 0.0855666 8.20983 0.174434 8.20983 0.260001ZM10.7177 10.1311C10.5278 10.5727 10.2938 10.9941 10.0194 11.3887C9.65253 11.9123 9.34987 12.2756 9.11831 12.4788C8.75852 12.8088 8.3736 12.9774 7.96049 12.9881C7.6646 12.9881 7.30837 12.9026 6.8918 12.7317C6.47488 12.5605 6.09021 12.4777 5.74109 12.4777C5.3742 12.4777 4.97937 12.5631 4.55839 12.7317C4.13741 12.9003 3.79667 12.9917 3.53616 12.9988C3.14058 13.0165 2.74524 12.8421 2.35346 12.4752C2.09956 12.2543 1.787 11.8803 1.41401 11.3494C1.01055 10.7796 0.675647 10.1245 0.416661 9.37247C0.138887 8.55997 0 7.77641 0 7.01418C0 6.14125 0.188822 5.39078 0.566467 4.76279C0.851085 4.26865 1.25847 3.85637 1.74917 3.56587C2.2333 3.277 2.78506 3.12093 3.34878 3.11341C3.66244 3.11341 4.07571 3.20964 4.58861 3.4021C5.09693 3.59439 5.42438 3.69054 5.57097 3.69054C5.67778 3.69054 6.04112 3.57653 6.661 3.34853C7.24498 3.13829 7.7368 3.05298 8.1428 3.08497C9.23663 3.17409 10.0593 3.60497 10.6044 4.38167C9.62485 4.97302 9.14395 5.80355 9.15106 6.86818C9.15817 7.69821 9.46083 8.38909 10.0522 8.93778C10.3139 9.18859 10.6195 9.38905 10.9538 9.52913C10.8753 9.73936 10.8015 9.93868 10.7187 10.1311H10.7177Z"
      fill={props.fill}
    />
  </svg>
);

export default AppleLogo;
