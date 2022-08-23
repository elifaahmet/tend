import { css } from 'styled-components';

import TendIconsWoff2 from '../assets/fonts/tend-icons.woff2';
import TendIconsWoff from '../assets/fonts/tend-icons.woff';
import TendIconsTtf from '../assets/fonts/tend-icons.ttf';
import TendIconsEot from '../assets/fonts/tend-icons.eot';
import TendIconsSvg from '../assets/fonts/tend-icons.svg';

export default css`
  @font-face {
    font-family: 'TendIcons';
    src: url(${TendIconsWoff2}) format('woff2'),
    url(${TendIconsWoff}) format('woff'),
    url(${TendIconsTtf}) format('truetype'),
    url(${TendIconsEot}) format('embedded-opentype'),
    url(${TendIconsSvg}) format('svg');
  }
`;
