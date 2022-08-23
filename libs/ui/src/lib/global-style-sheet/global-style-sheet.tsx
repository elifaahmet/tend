import React from 'react';

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import fonts from '../typography/fonts';
import iconFonts from '../icon/fonts';

export const GlobalStyleSheet = createGlobalStyle`
  ${normalize}
  ${fonts}
  ${iconFonts}

  * {
    box-sizing: border-box;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Pilat', sans-serif;
  }

  .scroll-lock {
    overflow: hidden;
  }
`;

export default GlobalStyleSheet;
