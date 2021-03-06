var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  watch: true,

  eslint: {
    configFile: '.eslintrc.js'
  },

  entry: [
    './src/app/app.js'
  ],

  output: {
    path: path.join(__dirname, 'www'),
    filename: 'app.js'
  },

  // use inline source maps.
  devtool: 'cheap-module-source-map',

  module: {
    loaders: [{
      test: /\.js?$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      exclude: /node_modules/,
      loaders: ['ng-annotate', 'babel-loader', 'eslint-loader']
    }, {
      test: /\.js$/,
      include: [
        path.resolve(__dirname, 'src')
      ],
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'html'
    }]
  },
  resolve: {
    root: [
      path.join(__dirname, 'node_modules')
    ],
    extensions: ['', '.js']
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({

      // load our index.html "template"
      template: './src/index.html',

      // inject all scripts into the body
      inject: 'body',
      filename: 'index.html'
    })
  ]
}
