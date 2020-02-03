'use strict'

const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: path.join(__dirname, '../src/index.js'),
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(vue|js|jsx)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/,
      enforce: 'pre'
    },
    {
      test: /.jsx$/,
      loader: 'babel-loader'
    },
    {
      test: /.js$/,
      loader: 'babel-loader',
      exclude: path.join(__dirname, '../node_modules'),
      include: path.join(__dirname, '../src'),
      options: {
        presets: ['@babel/preset-env']
      }
    },
    {
      test: /\.(gif|jpg|jpeg|png|svg)/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: 'resources/[path][name]-[hash:8].[ext]'
        }
      }]
    }
    ]
  },
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '../src/assets'),
      components: path.resolve(__dirname, '../src/components'),
      utils: path.resolve(__dirname, '../src/utils'),
      api: path.resolve(__dirname, '../src/api')
    }
  },
  devtool: 'source-map',
  plugins: [
    new HTMLPlugin(),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
}
