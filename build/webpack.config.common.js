'use strict'

const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const VueClientPlugin = require('vue-server-renderer/client-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, '../src/client-entry.js'),
  context: path.resolve(__dirname),
  output: {
    path: path.join(__dirname, '../public'),
    publicPath: 'http://127.0.0.1:8000/public/',
    filename: 'bundle.[hash:8].js'
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
          name: 'resources/[name]-[hash:8].[ext]'
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
  plugins: [
    new HTMLPlugin({
      template: path.resolve(__dirname, './template.html')
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
    new VueClientPlugin(),
    new CopyPlugin([{
      from: path.resolve(__dirname, '../src/assets'),
      to: 'resources/[path][name].[ext]',
      ignore: ['icons/common/*',
        'styles/*']
    }])
  ]
}
