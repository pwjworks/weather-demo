'use strict'

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.common')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const VueServerPlugin = require('vue-server-renderer/server-plugin')

module.exports = merge(baseConfig, {
  mode: 'development',
  target: 'node',
  entry: path.join(__dirname, '../src/server-entry.js'),
  devtool: 'source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build'),
    publicPath: '/public/'
  },
  externals: Object.keys(require('../package.json').dependencies),
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
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: './',
          hmr: process.env.NODE_ENV === 'development'
        }
      },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.[chunkhash:8].[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false
    }),
    new Dotenv({
      path: path.join(__dirname, '../.env/.env')
    }),
    new VueServerPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'vendor'
        }
      }
    }
  }
})
