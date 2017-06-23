const path = require('path');


module.exports = {

  entry: path.join(__dirname, '/client/src/app.jsx'),

  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
  },

   module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel',
      query: {
        presets: ["react", "es2015"]
      }
    }],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          // eslint options (if necessary)
        }
      },
    ],
  },
  
  watch: true
};
