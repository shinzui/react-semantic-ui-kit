var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var ROOT_PATH = path.resolve(__dirname)

module.exports = {
  devtool: '#source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    contentBase: './demo/'
  },
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'demo/index.js')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      inject: 'body',
      filename: 'demo/index.html'
    }),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      '__DEV__': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      loader: 'eslint-loader',
      includes: [path.resolve(ROOT_PATH, 'src'), path.resolve(ROOT_PATH, 'demo')],
      exclude: /node_modules/
    }],

    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      includes: [path.resolve(ROOT_PATH, 'src'), path.resolve(ROOT_PATH, 'demo')],
      loader: 'babel'
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.(otf|eot|png|gif|svg|ttf|woff|woff2)(\?(\d+#?.*|v=[0-9]\.[0-9]\.[0-9]))?$/,
      loader: 'url?limit=8192'
    }]
  },
  eslint: {
    failOnError: false
  }
}
