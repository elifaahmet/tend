import breakpoints from './assets/breakpoints';
import colors from './assets/colors';
import icons from './assets/icons';
import typography from './assets/typography';
import media from './assets/media';

export const Theme = {
  name: 'Default',
  ...breakpoints,
  ...colors,
  ...icons,
  ...typography,
  grid: {
    mediaQuery: 'only screen',
    dimensions: ['xs', 'sm', 'md', 'lg'],
    columns: {
      xs: 4,
      sm: 8,
      md: 8,
      lg: 12,
    },
    gutterWidth: {
      xs: 1,
      sm: 1,
      md: 1.5,
      lg: 1.5,
    },
    paddingWidth: {
      xs: 1,
      sm: 1,
      md: 1.5,
      lg: 0,
    },
    container: {
      xs: 'full',
      sm: 'full',
      md: 'full',
      lg: 'full',
    },
    breakpoints: {
      xs: 1,
      sm: 48, // 768px
      md: 64, // 1024px
      lg: 90, // 1440px
    },
    media: {},
  },
  fonts: {
    PilatRegular: 'Pilat',
    PilatCondensedBold: 'Pilat Condensed',
    TendIcons: 'TendIcons',
  },
  sizes: {
    'x-largeButtonWidth': '15.688rem',
    'x-largeButtonHeight': '3.563rem',
    largeButtonWidth: '13.688rem',
    largeButtonHeight: '3.563rem',
    mediumButtonWidth: '10.625rem',
    mediumButtonHeight: '2.938rem',
    smallButtonWidth: '8.938rem',
    smallButtonHeight: '1.75rem',
    tinyButtonWidth: '5.3125em',
    tinyButtonHeight: '1.75em',
    normalArrowLinkHeight: '1.188rem',
    largeArrowLinkHeight: '1.313rem',
  },
  borders: [0, '0.063rem solid', '0.125rem solid'],
};

Theme.grid.media = media(Theme.grid);

export default Theme;
