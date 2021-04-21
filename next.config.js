const redirects = require('./redirects/redirects')

module.exports = {
  async redirects() {
    return redirects
  },
}
