const HtmlWebpackPlugin = require("html-webpack-plugin");
//const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path")
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const { ReactLoadablePlugin } = require('react-loadable/webpack')


const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: "production",
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./build"),
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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              //because remove style-loader,my css can't work
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: "[local]"
              } // translates CSS into CommonJS
            },
            {
              loader: "less-loader" // compiles Sass to CSS
            }
          ]
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              outputPath: "assets/",
              limit: 10 * 1024
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              outputPath: "assets/"
            }
          }
        ]
      }  


    ]
  },
  optimization : {
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
    // minimizer: [
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       compress: {
    //         unused: true,
    //         dead_code: true,
    //         warnings: false
    //       }
    //     },
    //     sourceMap: true
    //   }),
    // ]

  },

  resolve: {
    modules: ['node_modules'],
    alias: {
     // Config: path.resolve(__dirname, "..", "scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js"),

      'TweenLite': 'gsap/src/minified/TweenLite.min.js',
      'TweenMax': 'gsap/src/minified/TweenMax.min.js',
      'TimelineLite': 'gsap/src/minified/TimelineLite.min.js',
      'TimelineMax': 'gsap/src/minified/TimelineMax.min.js',
      'ScrollMagic': 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      'animation.gsap': path.resolve('node_modules', 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'),
      'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
    },
    extensions: ['.js', '.jsx', '.json', '.scss']

  },
 
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      hash: true,
      filename: "index.html"
    }),
    //for surge.sh
    new HtmlWebpackPlugin({
      template: "./app/index.html",
      hash: true,
      filename: "200.html"
    }),
   
    new CleanWebpackPlugin(),
    new ExtractTextPlugin("main.css"),
    new webpack.DefinePlugin( {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.DEBUG': JSON.stringify(process.env.DEBUG) } ),

    // new ReactLoadablePlugin({
    //   filename: path.resolve(__dirname, "build/react-loadable.json")
    // })
  ],
};
