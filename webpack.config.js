const webpack = require('webpack');
const path = require('path');

const APP_DIR = path.resolve(__dirname + '/src/client');
const BUILD_DIR = path.resolve(__dirname + '/src/public');

const config = {
  entry: APP_DIR + '/app/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = config;
