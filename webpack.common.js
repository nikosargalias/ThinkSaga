const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    controller: path.resolve(__dirname, "src", "scripts", "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[hashname].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][hash][ext][query]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset",
        generator: {
          filename: "assets/[hash][ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "about.html"),
      filename: "about.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "upload-article.html"),
      filename: "upload-article.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "article.html"),
      filename: "article.html",
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "edit-article.html"),
      filename: "edit-article.html",
    }),
  ],
};
