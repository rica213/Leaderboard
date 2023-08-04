/*eslint-disable*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "./src/index.js"),
  },
  devServer: {
    watchFiles: path.join(__dirname, "src"),
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Leaderboard",
      filename: "index.html",
      template: "./src/index.html",
    }),
  ],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        type: "asset/resource",
      },
    ],
  },
};
