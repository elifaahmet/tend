/** @format */

module.exports = {
  displayName: 'marketing',
  preset: '../../../jest.preset.js',
  transform: {
    '^(?!.*\\.(js|jsx|ts|tsx|css|json)$)': '@nrwl/react/plugins/jest',
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      { cwd: __dirname, configFile: './babel-jest.config.json' },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: '../../../coverage/apps/marketing/junit',
        outputName: `test-${Date.now()}.xml`,
      },
    ],
  ],
  coverageDirectory: '../../../coverage/apps/marketing',
};
