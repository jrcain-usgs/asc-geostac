const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  devServer: {
    contentBase: "./dist",
    compress: true,
    watchContentBase: true,
    port: 8000,
  },
});
