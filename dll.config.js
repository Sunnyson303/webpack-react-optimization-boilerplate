const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')

const vendors = [
  // 'react',
  // 'react-dom',
  // 'react-router-dom',
  'recharts',
  // 'antd'
]

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    library: 'name'
  },
  entry: {
    libs: vendors
  },
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }),
    new webpack.DllPlugin({
      path: 'manifest.json',
      name: '[name]',
      context: __dirname,
    }),
  ]
}