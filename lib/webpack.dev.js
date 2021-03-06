const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.js');

const devConfig = {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  mode: 'development',
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'cheap-source-map',
};

module.exports = merge(baseConfig, devConfig);
