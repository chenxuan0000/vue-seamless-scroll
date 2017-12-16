'use strict'
const path = require('path')
const version = require('../package.json').version

module.exports = {
  version,
  isProduction: process.env.NODE_ENV === 'production',
  paths: {
    root: path.join(__dirname, '..'),
    src: {
      main: path.join(__dirname, '..', 'src'),
      examples: path.join(__dirname, '..', 'examples-src')
    },
    output: {
      main: path.join(__dirname, '..', 'dist'),
      examples: path.join(__dirname, '..', 'examples')
    },
    resolve (loc) {
      return path.join(__dirname, '..', loc)
    }
  }
}
