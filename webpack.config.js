const webpack = require('webpack');

module.exports = {
  debug: true,
  devtool: 'inline-source-map',
  devServer: {
    inline: true,
    historyApiFallback: true,
    port: 8000
  },
  entry: [
    'bootstrap-loader',
    './src/css/style.css',
    './src/index.js',
  ],
  output: { path: './build', publicPath: '/build/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        loader: 'url-loader?limit=10000',
        test: /\.(png|jpg|jpeg|gif|woff)$/
      },
      { test: /(\.css)$/, loaders: ['style', 'css'] },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test:/bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/, loader: 'imports?jQuery=jquery' },
    ]
  }
}
