const ESLintPlugin = require('eslint-webpack-plugin');
const webpackUtil = require('./webpack.util')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: webpackUtil.getEntryConfig('server'),
  resolve: {
    extensions: ['.js', '.ts', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {loader: 'babel-loader'}
        ],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: [
          {loader: 'babel-loader'},
          {loader: 'ts-loader'}
        ]
      }
    ]
  },
  plugins: [
    ...webpackUtil.getHtml(),
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      exclude: ['node_modules']
    })
  ],
  devServer: {
    port: '8080'
  }
}
