var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './app/index'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders:[{   
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      include: path.join(__dirname, 'app')
    },{
      test: /\.css$/,
      exclude: /node_modules/,
      include: path.join(__dirname, 'app'),
      loader: 'style-loader!css-loader'
        }]
  }
};
