const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpackUtil = require('./webpack.util')

module.exports = {
  mode: 'production',
  devtool: false,
  entry: webpackUtil.getEntryConfig('src'),
  output: {
    path: require('path').resolve(__dirname, 'lib'),
    filename: (chunkItem) => {
      return `${chunkItem.chunk.name}.js`
    },
    libraryTarget: 'commonjs',
    umdNamedDefine: false
  },
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
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['lib']
    }),
    new ESLintPlugin({
      extensions: ['js', 'ts'],
      exclude: ['node_modules']
    })
  ]
}
