const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.common')
const merge = require('webpack-merge')
const cdnConfig = require('../app.config.js')

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: {
    app: path.join(__dirname, '../src/client-entry.js'),
    vendor: ['vue']
  },
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: '[name].[chunkhash:8].js',
    publicPath: cdnConfig.host
  },
  module: {
    rules: [{
      test: /.vue$/,
      loader: 'vue-loader',
      options: {
        preserveWhitespace: false,
        extractCSS: true
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
