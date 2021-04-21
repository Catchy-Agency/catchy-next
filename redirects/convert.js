/**
 * Converts redirects.csv to redirects.js
 */

const fs = require('fs')
const path = require('path')

const clean = (url) => {
  url = url.trim()
  url = slice(url, '.com')
  url = slice(url, '.app')
  url = url.endsWith('/') ? url.slice(0, -1) : url
  return url
}

const slice = (url, target) => {
  const index = url.indexOf(target)
  return index > -1 ? url.slice(index + target.length) : url
}

const filePath = path.resolve(__dirname, 'redirects.csv')
const fileString = fs.readFileSync(filePath, 'utf8')
const fileLines = fileString.split('\n')
const filePairs = fileLines.map((line) => line.split(','))
const redirects = filePairs.map((pair) => ({
  source: clean(pair[0]),
  destination: clean(pair[1]),
  permanent: true,
}))

const output = `module.exports = ${JSON.stringify(redirects, null, 2)};`
fs.writeFileSync(path.resolve(__dirname, 'redirects.js'), output)
