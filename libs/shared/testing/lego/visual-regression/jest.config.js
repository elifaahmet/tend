module.exports = {
  displayName: 'shared-testing-lego-visual-regression',
  preset: '../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest'
  },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../../../../coverage/libs/shared/testing/lego/visual-regression'
};
