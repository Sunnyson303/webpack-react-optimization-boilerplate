const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    './src/index.js'
  ],
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase :'./dist',
    hot: true,
  },
  devtool: 'inline-source-map',
})