/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Padlock: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg width="88" height="109" viewBox="0 0 88 109" fill="none" xmlns={XMLNS}>
      <path
        d="M53.1231 2.00444C56.1511 3.3727 58.9005 5.28812 61.2331 7.65444C65.9981 12.5746 68.6626 19.1552 68.6631 26.0044V38.1244H71.8531C73.8716 38.1073 75.8714 38.5121 77.7243 39.3128C79.5772 40.1136 81.2424 41.2926 82.6131 42.7744C84.0815 44.2571 85.2373 46.0195 86.012 47.9571C86.7867 49.8947 87.1646 51.9681 87.1231 54.0544V92.3044C87.1564 94.3718 86.7743 96.4247 85.9996 98.3417C85.225 100.259 84.0734 102.001 82.6131 103.464C81.2424 104.946 79.5772 106.125 77.7243 106.926C75.8714 107.727 73.8716 108.132 71.8531 108.114H15.2731C13.256 108.133 11.2573 107.728 9.40587 106.927C7.55441 106.127 5.89114 104.947 4.52312 103.464C3.05923 102.003 1.90459 100.262 1.12804 98.3442C0.351485 96.4268 -0.0310883 94.3728 0.00312495 92.3044V54.0544C-0.0387118 51.9672 0.339908 49.8928 1.11644 47.9549C1.89297 46.0171 3.05153 44.2553 4.52312 42.7744C5.89114 41.2919 7.55441 40.1123 9.40587 39.3114C11.2573 38.5106 13.256 38.1062 15.2731 38.1244H54.1931V26.0044C54.2035 24.558 53.9269 23.1238 53.3793 21.785C52.8317 20.4461 52.0241 19.2291 51.0031 18.2044C50.0262 17.1395 48.8352 16.2932 47.5082 15.721C46.1811 15.1489 44.7481 14.8638 43.3031 14.8844C40.484 14.8123 37.7463 15.8336 35.6631 17.7344C34.6324 18.6851 33.8198 19.8478 33.2812 21.1425C32.7426 22.4372 32.4908 23.8332 32.5431 25.2344V28.0044H18.0631V25.2344C17.9803 21.8876 18.5924 18.56 19.861 15.4618C21.1295 12.3636 23.0269 9.56211 25.4331 7.23444C27.7698 4.88591 30.5577 3.03463 33.6288 1.79209C36.6999 0.549544 39.9908 -0.0585468 43.3031 0.00443735C46.6807 -0.0273556 50.027 0.654167 53.1231 2.00444ZM71.4531 52.3344H14.8831C14.6342 52.3289 14.3932 52.4224 14.2131 52.5944C14.1261 52.6823 14.0581 52.7871 14.0133 52.9024C13.9686 53.0176 13.9481 53.1409 13.9531 53.2644V93.2644C13.9474 93.3881 13.9676 93.5116 14.0123 93.627C14.057 93.7424 14.1253 93.8472 14.2129 93.9347C14.3004 94.0222 14.4052 94.0905 14.5206 94.1353C14.636 94.18 14.7595 94.2001 14.8831 94.1944H71.4531C71.5767 94.1995 71.6999 94.1789 71.8152 94.1342C71.9305 94.0895 72.0353 94.0215 72.1231 93.9344C72.2951 93.7544 72.3886 93.5134 72.3831 93.2644V53.2644C72.3888 53.1408 72.3687 53.0173 72.3239 52.9019C72.2792 52.7865 72.2109 52.6817 72.1234 52.5942C72.0359 52.5066 71.9311 52.4383 71.8157 52.3936C71.7002 52.3489 71.5768 52.3287 71.4531 52.3344ZM43.5631 62.8244C44.9465 62.7994 46.3203 63.0579 47.5999 63.5842C48.8795 64.1105 50.0377 64.8933 51.0031 65.8844C51.9756 66.8316 52.7435 67.968 53.2595 69.2236C53.7755 70.4792 54.0286 71.8272 54.0031 73.1844C54.0137 74.5607 53.7513 75.9255 53.231 77.1997C52.7107 78.4739 51.9429 79.6323 50.972 80.6079C50.0011 81.5834 48.8464 82.3567 47.5747 82.8831C46.3029 83.4095 44.9395 83.6784 43.5631 83.6744C42.1826 83.6851 40.8137 83.421 39.5362 82.8976C38.2587 82.3742 37.098 81.6019 36.1218 80.6257C35.1456 79.6495 34.3733 78.4889 33.8499 77.2114C33.3265 75.9338 33.0625 74.565 33.0731 73.1844C33.0518 71.8278 33.3067 70.4809 33.8225 69.226C34.3382 67.971 35.104 66.8341 36.0731 65.8844C37.0443 64.8871 38.2107 64.1007 39.4994 63.5742C40.788 63.0477 42.1714 62.7925 43.5631 62.8244Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Padlock;