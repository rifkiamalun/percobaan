const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      /* rules buat component */

      {
        test: /\.css$/i,

        exclude: /styles/,

        use: ["to-string-loader", "css-loader"],
      },

      {
        test: /\.(png|jpe?g|gif)$/i,

        use: [

          {

            loader: "file-loader"

          }

        ],

      },

      /* rules buat global style */

      {
        test: /\.css$/i,

        include: /styles/,

        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      bootstrap: "bootstrap/dist/css/bootstrap.min.css",
    }),

    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
};