const rootMain = require('../../../../../.storybook/main');

// Use the following syntax to add addons!
// rootMain.addons.push('');
rootMain.stories.push(...['../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'])

module.exports = {
  refs: (rootMain, { configType }) => {
    if(configType === 'DEVELOPMENT') {
      return {
        product: {
          title: 'Lego Product UI Kit',
          url: 'http://localhost:3001'
        },
        marketing: {
          title: 'Lego Marketing UI Kit',
          url: 'http://localhost:3002'
        },
        'ui-kit': {
          title: 'Lego UI Kit',
          url: 'http://localhost:3003'
        }
      }
    }
    return {
      product: {
        title: 'Lego Product UI Kit',
        url: 'https://d3ehbu0xmyghbo.cloudfront.net'
      },
      marketing: {
        title: 'Lego Marketing UI Kit',
        url: 'https://dlyhskc7c8xs0.cloudfront.net'
      },
      'ui-kit': {
        title: 'Lego UI Kit',
        url: 'https://d3qqfkedzcek6z.cloudfront.net'
      }
    }
  }
};
