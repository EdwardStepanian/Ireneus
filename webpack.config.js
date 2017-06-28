const path = require("path")

module.exports = {

  entry: path.join(__dirname, "/client/src/app.jsx"),

  output: {
    path: path.join(__dirname, "/client/dist/js"),
    filename: "app.js",
  },

   module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, "/client/src"),
      loader: "babel",
      query: {
        presets: ["react", "es2015"]
      }
    }],
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },
    ],
  },
  
  watch: true
}
