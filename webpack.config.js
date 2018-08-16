const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    contentBase: './dist',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-class-properties'],
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
