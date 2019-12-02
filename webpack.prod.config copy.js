const HtmlWebpackPlugin = require("html-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path")

module.exports = {
  mode: "production",
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].bundle.js',
    chunkFilename: '[name].js',
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
     
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      hash: true,
      filename: "index.html"
    }),
    // new BundleAnalyzerPlugin({
    //   generateStatsFile: true
    // })
  ],
};

