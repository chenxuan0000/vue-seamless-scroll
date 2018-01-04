'use strict'
const merge = require('deep-assign')
const webpack = require('webpack')
const options = require('./options')
const path = require('path')
const base = require('./webpack.base.js')
function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = merge(base, {
  watch: true,
  devtool: '#eval-source-map',
  entry: options.paths.resolve('examples-src/index.js'),
  output: {
    filename: 'examples.bundle.js',
    path: options.paths.output.examples
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'components': resolve('examples-src/components'),
      'src': resolve('src')
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(options.version)
    })
  ],
  devServer: {
    contentBase: options.paths.output.examples,
    host: 'localhost',
    historyApiFallback: true,
    noInfo: true
  }
})

// First item in module.rules array is Vue
config.module.rules[0].options.loaders = {
  scss: 'vue-style-loader!css-loader!sass-loader'
}

module.exports = config
