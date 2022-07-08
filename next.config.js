/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        // for webpack 4 use
        // test: /\.(js|ts)x?$/,
        and: [/\.(js|ts)x?$/],
      },

      use: ['@svgr/webpack'],
    });

    config.module.rules.map((rule) => {
      if (rule.oneOf) {
        rule.oneOf.find((configRule) => {
          if (Array.isArray(configRule.use)) {
            configRule.use.forEach((loaderItem) => {
              const isSassRule = loaderItem.loader && loaderItem.loader.includes('sass-loader');

              const isCssLoader = loaderItem.loader && loaderItem.loader.includes('css-loader');
              if (isSassRule) {
                configRule.use.push({
                  loader: 'sass-resources-loader',
                  options: {
                    // eslint-disable-next-line global-require
                    resources: require('./src/styles/scss-resources.js'),
                  },
                });
              }
              if (isCssLoader) {
                if (loaderItem.options && loaderItem.options.modules) {
                  delete loaderItem.options.modules.mode;
                  loaderItem.options.modules.exportLocalsConvention = 'camelCase';
                }
              }
            });
          }
        });
      }
    });

    return config;
  },
};
