const colorPalette = {
  neutral: [
    '#FFFFFF',
    '#F6F6F1',
    '#E8E8E3',
    '#717171',
    '#000000'
  ],
  red: [
    '#FF5554',
    '#FFD5D4'
  ],
  magenta: [
    '#FA5CAE',
    '#FED6EB'
  ],
  orange: [
    '#F79234',
    '#FDE4CC'
  ],
  yellow: [
    '#FFC73D',
    '#FFF1CE'
  ],
  green: [
    '#173D38',
    '#002923'
  ],
  neonGreen: [
    '#BDFC4C'
  ],
  transparent: [
    '#FFFFFF00'
  ],
};

const colors = {
  white: colorPalette.neutral[0],
  offWhite: colorPalette.neutral[1],
  lightGray: colorPalette.neutral[2],
  darkGray: colorPalette.neutral[3],
  black: colorPalette.neutral[4],
  defaultMagenta: colorPalette.magenta[0],
  lightMagenta: colorPalette.magenta[1],
  defaultTransparent: colorPalette.transparent[0],
  defaultGreen: colorPalette.green[0],
  darkGreen: colorPalette.green[1],
  defaultRed: colorPalette.red[0],
  defaultOrange: colorPalette.orange[0],
  defaultYellow: colorPalette.yellow[0],
  ...colorPalette
}

export default {
  colors
}
