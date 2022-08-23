/** @format */

import React from 'react';
import { useTheme } from '@emotion/react';
import { SVGIconProps, XMLNS } from '../svg-icon';

const Globe: React.FC<SVGIconProps> = (props) => {
  const theme = useTheme();

  return (
    <svg
      width="109"
      height="109"
      viewBox="0 0 109 109"
      fill="none"
      xmlns={XMLNS}
    >
      <path
        d="M75.0122 4.25076C88.0482 9.67388 98.409 20.0347 103.832 33.0708C106.681 39.7029 108.128 46.8526 108.082 54.0708C108.128 61.2888 106.681 68.4385 103.832 75.0708C98.3951 88.0906 88.0376 98.4373 75.0122 103.861C68.3798 106.71 61.2302 108.156 54.0122 108.111C46.794 108.157 39.6443 106.71 33.0122 103.861C19.9949 98.413 9.66013 88.0387 4.26215 75.0008C1.42014 68.3839 -0.0266608 61.252 0.0121519 54.0508C-0.0237264 53.3813 0.0199117 52.7099 0.142152 52.0508C0.299452 51.4017 0.389923 50.7382 0.412152 50.0708L0.542152 49.2708H92.4522C91.2086 43.0216 88.7744 37.0701 85.2822 31.7408C82.0069 26.4186 77.3753 22.0631 71.8622 19.1208C72.8797 21.9285 73.7443 24.7894 74.4522 27.6908C75.2251 30.8655 75.8227 34.0803 76.2422 37.3208L76.3822 38.2508H61.2422C60.8334 35.1781 60.2119 32.1374 59.3822 29.1508C58.6816 26.6474 57.8368 24.1866 56.8522 21.7808C56.3222 20.6308 55.8522 19.6108 55.3922 18.7308C55.0355 17.9702 54.589 17.2551 54.0622 16.6008C53.5425 17.2582 53.0996 17.9728 52.7422 18.7308C52.2922 19.6108 51.8122 20.6308 51.2822 21.7808C50.3055 24.0561 49.4837 26.3947 48.8222 28.7808C48.0275 31.6215 47.3833 34.5022 46.8922 37.4108V38.2108H31.7522C32.1669 34.826 32.7881 31.4698 33.6122 28.1608C34.4122 24.9708 35.2922 21.9608 36.2722 19.1608C28.4616 23.2436 22.2079 29.7784 18.4722 37.7608L18.2122 38.2908H2.40215C4.0413 32.7765 6.55312 27.5605 9.84215 22.8408C13.1699 18.2806 17.1528 14.237 21.6622 10.8408C26.2064 7.42051 31.2711 4.75314 36.6622 2.94076C42.2515 0.97334 48.1367 -0.0210703 54.0622 0.000760706C61.2634 -0.038052 68.3953 1.40875 75.0122 4.25076ZM15.6822 61.4908C16.7746 67.3795 19.2301 72.9309 22.8522 77.7008C26.4159 82.4315 31.0037 86.2946 36.2722 89.0008C34.8537 84.9688 33.7209 80.8419 32.8822 76.6508C31.9285 71.9659 31.3302 67.2157 31.0922 62.4408L31.0122 61.4908H15.6822ZM45.9622 61.4908C46.2612 66.1985 46.9062 70.8778 47.8922 75.4908C48.6646 79.2031 49.8001 82.8305 51.2822 86.3208C51.8122 87.4708 52.2822 88.4908 52.7422 89.3208C53.0996 90.0787 53.5425 90.7934 54.0622 91.4508C54.589 90.7965 55.0355 90.0814 55.3922 89.3208C55.8322 88.4408 56.3222 87.4208 56.8522 86.3208C58.3336 82.8338 59.4691 79.2097 60.2422 75.5008C61.2281 70.8878 61.8731 66.2085 62.1722 61.5008L45.9622 61.4908ZM77.1722 61.4908C76.8579 66.4379 76.2367 71.3607 75.3122 76.2308C74.5079 80.5734 73.3542 84.8439 71.8622 89.0008C77.0473 86.2857 81.5789 82.4741 85.1422 77.8308C88.7552 73.1813 91.2558 67.7662 92.4522 62.0008V61.4708L77.1722 61.4908Z"
        fill={theme.color[props.color]}
      />
    </svg>
  );
};

export default Globe;
