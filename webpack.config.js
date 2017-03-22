const webpack = require('webpack')

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/src/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
    test: /\.(jpg|png|svg)$/,
    loader: 'file',
    include: './images'
  }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
