module.exports = {
  displayName: 'lego-product-ui-kit',
  preset: '../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
    ".+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub"
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  snapshotSerializers: [
    '@emotion/jest/serializer'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/setupTests.js'
  ],
  coverageDirectory: '../../../coverage/libs/lego/product-ui-kit'
};
