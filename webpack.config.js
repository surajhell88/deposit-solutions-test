const webpack = require("webpack");
const path = require("path");

const resolve = dir => {
  return path.join(__dirname, dir);
};

module.exports = {
  entry: {
    app: resolve("src/index.js")
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js"]
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "[name].min.js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "./dist",
    hot: true
  }
};
