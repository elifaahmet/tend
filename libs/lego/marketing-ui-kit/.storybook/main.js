const rootMain = require('../../../../.storybook/main');

const libraryMain = Object.assign({}, rootMain);
libraryMain.addons.push('@react-theming/storybook-addon');

libraryMain.staticDirs = ['../public'];
module.exports = libraryMain;
