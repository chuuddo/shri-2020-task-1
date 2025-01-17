const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    filename: "script.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.svg$/i,
        loader: "svg-url-loader"
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css"
    })
  ]
};
