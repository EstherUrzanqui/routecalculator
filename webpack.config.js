const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
  mode: "production",

  entry: "./src/App.js",
  
  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          NODE_ENV: prod ? `"production"` : '"development"'
        }
      }
    })
  ]
};