const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
  },
};
