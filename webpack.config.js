var config = require('config')

resolve: {
  alias: {
    config: path.join(__dirname, 'config', process.env.NODE_ENV)
  }
}

module.exports = { testing: 'something'}