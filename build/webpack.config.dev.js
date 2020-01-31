'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.common')

const devServer = {
  port: 8000,
  overlay: {
    errors: true
  },
  open: true,
  hot: true
}
module.exports = merge(baseConfig, {
  devtool: '#cheap-module-source-map',
  module: {
    rules: [{
      test: /.vue$/,
      loader: 'vue-loader',
      options: {
        preserveWhitespace: false,
        extractCSS: false
      }
    },
    {
      test: /\.styl(us)?$/,
      use: [
        'vue-style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            sourceMap: true
          }
        },
        'stylus-loader'
      ]
    }
    ]
  },
  devServer,
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})
