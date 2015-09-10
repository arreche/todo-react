module.exports = {
  entry: './app/main.js', 
  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },
      {
        test: /\.sass$/,
        loader: "style!css!sass"
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader?limit=8192'
      }
    ],
  },
  devServer: {
      hot: true,
      inline: true,
      proxy: {
        "/api/*": "http://localhost:3000"
      }
  }
}
