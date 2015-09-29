var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './client.js', 
  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      },
    ],
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
  resolve : {
    alias: {
        jquery: __dirname + '/node_modules/jquery/dist/jquery.js'
    },
    extensions: ['', '.js', '.jsx', '.sass'] 
  },
  devServer: {
      proxy: {
        "/api/*": "http://localhost:3000"
      }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Todo-React'
    })
  ]
}
