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
              'transform-class-properties',
              'transform-object-rest-spread',
            ],
            presets: ['babel-preset-env', 'babel-preset-react'],
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
