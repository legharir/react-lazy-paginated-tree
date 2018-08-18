const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    // library: 'react-lazy-paginated-tree',
    // libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              'transform-decorators-legacy',
              'transform-class-properties',
              'transform-object-rest-spread',
            ],
            presets: ['babel-preset-env', 'babel-preset-react', 'stage-1'],
          },
        },
      },
      {
        test: /\.css$/,
        use: {
          loader: 'css-loader',
        },
      },
    ],
  },
};
