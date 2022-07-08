const path = require('path');

const resources = [
  'variables/index.scss',
  'core/helpers/_include-media.scss',
  'core/_settings.scss',
];

module.exports = resources.map((file) => path.resolve(__dirname, file));
