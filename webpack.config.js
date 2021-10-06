const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
// require('dotenv').config({ path: '/config/keys.js' });

module.exports = {
  mode: 'production',
  context: __dirname,
  entry: './frontend/entry.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    fallback: {
      "querystring": require.resolve("querystring-es3"),
      "https": require.resolve("https-browserify"),
      "url": require.resolve("url/"),
      "http": require.resolve("stream-http"),
      "buffer": require.resolve("buffer/")
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react']
          }
        },
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    })
  ]
};
