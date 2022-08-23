module.exports = {
    stories: [
        '../src/lib/**/*.stories.mdx',
        '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'
    ],
    addons: [
        '@storybook/addon-viewport',
        '@storybook/addon-essentials',
        'storybook-addon-styled-component-theme/dist/register'
    ]
};