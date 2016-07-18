var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var WebpackDevServer = require("webpack-dev-server");
var compiler = webpack(config);
var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  stats:{colors:true}
});
server.listen(3000, 'localhost', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
