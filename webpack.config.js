const webpack = require('webpack');
const config = require('config')

module.exports = {
  mode: "production",

  entry: "./src/App.js",

  resolve: {
    alias: {
      config: path.join(__dirname, 'config', process.env.NODE_ENV)
    }
  },

  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ]
};