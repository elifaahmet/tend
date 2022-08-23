import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import fonts from './fonts';

export default createGlobalStyle`
  ${normalize}
  ${fonts}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: calc(12px + 0.2083333333vw);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding: 0
    font-family: 'Pilat', sans-serif;
  }

  /* Mobile Overrides */
  @media (max-width: 47.9375em) {
    body {
      padding: 0;
    }
  }
`;
