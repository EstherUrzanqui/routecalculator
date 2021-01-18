const webpack = require('webpack');
const prod = process.argv.indexOf('-p') !== -1;

module.exports = {
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