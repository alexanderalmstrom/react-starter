const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = require('./index.js')
const env = process.env.NODE_ENV

const webpackConfig = {
  devServer: {
    contentBase: path.resolve(__dirname, 'source'),
    watchContentBase: false,
    historyApiFallback: true,
    host: 'localhost',
    port: 5000,
    hot: true,
    publicPath: '/'
  },

  entry: [
    './source/main.js'
  ],

  resolve: {
    extensions: ['.scss', '.js', '.css', '.json'],
    modules: [
      path.resolve(__dirname, 'source/components'),
      path.resolve(__dirname, 'node_modules')
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'javascripts/application.bundle.js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            plugins: [
              'react-hot-loader/babel'
            ]
          }
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    })
  ]
}

// Development
if (env == 'development') {
  webpackConfig.mode = 'development'

  webpackConfig.entry.unshift(
    'react-hot-loader/patch',
    'webpack-hot-middleware/client'
  )

  webpackConfig.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'style-loader'
        },
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
            includePaths: config.paths
          }
        }
      ]
    }
  )

  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )
}

// Production
if (env == 'production') {
  webpackConfig.mode = 'production'

  webpackConfig.module.rules.push(
    {
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
              options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: config.paths
            }
          }
        ]
      })
    }
  )

  webpackConfig.plugins.push(
    new CleanWebpackPlugin([
      path.resolve(__dirname, 'build')
    ]),
    new ExtractTextPlugin('stylesheets/application.bundle.css'),
    new CopyWebpackPlugin([
      {
        from: 'source/index.html',
        to: 'index.html'
      }
    ])
  )
}

module.exports = webpackConfig
