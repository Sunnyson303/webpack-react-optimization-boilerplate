const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      }
    }, {
      test: /\.(less|css)$/,
      exclude: /(node_modules)/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }, {
        loader: 'less-loader'
      }]
    },{
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: 'webpack-react-startkit',
      template: './src/public/index.html'
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    recharts: 'Recharts'
  }
}