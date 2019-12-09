const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    script: "./src/main.js",
    index: "./src/pages/index.js",
    indexOverlay: "./src/overlays/index.js",
    product: "./src/pages/product.js",
    productOverlay: "./src/overlays/product.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
      },
      {
        test: /\.(png|svg)$/i,
        loader: "url-loader",
        options: {
          limit: 8192
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "index",
      filename: "index.html",
      chunks: ["script", "index", "indexOverlay"]
    }),
    new HtmlWebpackPlugin({
      title: "product",
      filename: "product.html",
      chunks: ["script", "product", "productOverlay"]
    })
  ],
  devServer: {
    hot: true,
    open: true,
    port: 3000
  }
};
