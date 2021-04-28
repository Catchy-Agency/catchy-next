const { createSecureHeaders } = require('next-secure-headers')

const redirects = require('./redirects/redirects')

module.exports = {
  headers: async () => [{ source: '/(.*)', headers: createSecureHeaders() }],
  redirects: async () => redirects,
}
