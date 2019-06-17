/* eslint-disable no-useless-computed-key */
const { paths } = require("react-app-rewired");
const { override, fixBabelImports, addLessLoader, babelInclude, enableEslintTypescript, addWebpackAlias, overrideDevServer } = require('customize-cra');

module.exports = {
  webpack: override(
    enableEslintTypescript(),
    babelInclude([
      `${paths.appSrc}`,
    ]),
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {},
    }),
    addWebpackAlias({
      '@': `${paths.appSrc}/`,
      '@assets': `${paths.appSrc}/assets/`,
      '@layouts': `${paths.appSrc}/layouts/`,
      '@components': `${paths.appSrc}/components/`,
      '@util': `${paths.appSrc}/util/`,
      '@models': `${paths.appSrc}/models/`,
      '@store': `${paths.appSrc}/store/`
    }),
  )
};
