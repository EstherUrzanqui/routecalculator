const webpack = require('webpack');
const config = require('config')

module.exports = {
  mode: "production",

  entry: "./src/App.js",

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
};