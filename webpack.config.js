const path = require("path");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");

module.exports = (env, argv) => {
  const isDev = argv.mode === "development";
  let baseConfig = {
    entry: {
      style: "./src/main.js"
    },
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "build")
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                hmr: isDev
              },
            },
            "css-loader",
            "sass-loader"
          ]
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
      new MiniCssExtractPlugin({
        filename: "[name].css"
      })
    ]
  };
  let devConfig = {
    devtool: "inline-source-map",
    entry: {
      index: "./src/pages/index.js",
      indexOverlay: "./src/overlays/index.js",
      product: "./src/pages/product.js",
      productOverlay: "./src/overlays/product.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "index",
        filename: "index.html",
        chunks: ["style", "index", "indexOverlay"]
      }),
      new HtmlWebpackPlugin({
        title: "product",
        filename: "product.html",
        chunks: ["style", "product", "productOverlay"]
      })
    ],
    devServer: {
      hot: true,
      open: true,
      port: 3000
    }
  };
  return isDev ? merge(baseConfig, devConfig) : baseConfig;
};
