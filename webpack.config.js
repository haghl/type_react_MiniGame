const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  name: "react-minigame-type-webpack-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx", ".d.ts"],
  },
  entry: "./src/index.tsx",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        sideEffects: false,
        use: ["babel-loader"],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  output: {
    filename: "[name].bundle.js",
    publicPath: "/",
    path: path.join(__dirname, "/build"),
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" }), new webpack.ProvidePlugin({ React: "react" })],
  devServer: {
    port: 3000,
    proxy: { "/api": "http://localhost:3000" },
    static: path.join(__dirname, "/build"),
    historyApiFallback: true,
    allowedHosts: "all",
  },
};
