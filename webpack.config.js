const path = require('path');


module.exports = {

  entry: path.join(__dirname, '/client/src/app.jsx'),

  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

  module: {
     rules: [
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, '/client/src'),
        exclude: /node_modules/,
        use: [
          "babel-loader",
          "eslint-loader",
        ],
      },
    ],
  },
  watch: true
};
