const path = require("path");
const templateName = path.resolve(__dirname, '..').split(path.sep).pop();
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    writeToDisk: true // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
  },
  transpileDependencies: [
    'vuetify'
  ],
  outputDir: '../offline',
  publicPath: `bxlocal://`,

  pages: {
    index: {
      // entry for the page
      entry: 'src/main.js',
      // the source template
      template: 'template/index.html',
      // output as dist/index.html
      filename: 'index.html',
    },
  },
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
    config.module.rule('images').use('url-loader')
      .loader('file-loader') // replaces the url-loader
      .tap(options => Object.assign(options, {
        name: '[name].[ext]'
      }));
    config.module.rule('svg').use('file-loader')
      .tap(options => Object.assign(options, {
        name: '[name].[ext]'
      }));
    const svgRule = config.module.rule('svg');

    svgRule.uses.clear();

    svgRule
      .use('babel-loader')
      .loader('babel-loader')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
  css: {
    extract: {
      filename: 'bundle.css',
    }
  },
  configureWebpack: {
    plugins: [
      new CleanWebpackPlugin()
    ],
    output: {
      filename: 'bundle.js',
    }
  }
};
