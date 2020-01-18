const path = require('path');
const ROOT = path.resolve(__dirname, 'src');
const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  mode: NODE_ENV,
  context: ROOT,

  resolve: {
    extensions: ['.ts', '.js'],
    modules: [
      ROOT,
      'node_modules'
    ]
  },

  module: {
    rules: [
      // PRE-LOADERS
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      },

      // LOADERS
      {
        test: /\.ts$/,
        exclude: [/node_modules/],
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      }
    ]
  },

  devtool: 'cheap-module-source-map',
  devServer: {}
};
