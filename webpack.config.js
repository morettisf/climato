module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/src/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    loaders: [
    {
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    },
    {
    test: /\.(jpg|png|svg)$/,
    loader: 'file',
    include: './images'
  }]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
