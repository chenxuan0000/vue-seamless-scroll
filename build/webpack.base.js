'use strict'
const options = require('./options')

module.exports = {
  resolve: {
    modules: [
      options.paths.root,
      options.paths.resolve('node_modules')
    ],
    alias: {
      src: 'src',
      vue$: 'vue/dist/vue.common.js'
    },
    extensions: ['.js', '.json', '.vue']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {}
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  // Stats is used to customize Webpack's console output
  // https://webpack.js.org/configuration/stats/
  stats: {
    hash: false,
    colors: true,
    chunks: false,
    version: false,
    children: false,
    timings: true
  }
}
