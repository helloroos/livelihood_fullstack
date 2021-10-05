const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');

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
      'process.env': JSON.stringify(dotenv.config().parsed) // it will automatically pick up key values from .env file
    })
  ]
  // plugins: [
  //   new webpack.DefinePlugin({
  //     NODE_ENV: JSON.stringify(process.env.NODE_ENV),
  //     newsApiKey: JSON.stringify(process.env.NEWS_API)
  //   })
  // ],
};
