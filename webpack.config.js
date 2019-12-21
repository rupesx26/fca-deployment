const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path")
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].bundle.js',
    chunkFilename: '[name].[chunkhash].js',

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
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: (resourcePath, context) => {
                // publicPath is the relative path of the resource to the context
                // e.g. for ./css/admin/main.css the publicPath will be ../../
                // while for ./css/main.css the publicPath will be ../
                return path.relative(path.dirname(resourcePath), context) + '/';
              },
            },
          },
          'css-loader',
        ],
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
        loaders: [
          {
            loader:  "url-loader",
            options: {
                outputPath: "assets/",
                limit: 10 * 1024,
                name: 'images/[name].[hash].[ext]'
              }
          },

          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
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
      chunks: 'all',
      minChunks: 2,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            unused: true,
            dead_code: true,
            warnings: false
          }
        },
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ]

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
    new MiniCssExtractPlugin(
      {
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css",
        orderWarning: true, // Disable to remove warnings about conflicting order between imports
      }),
    new CleanWebpackPlugin(),
    new ExtractTextPlugin("main.css"),
    new webpack.DefinePlugin( {'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.DEBUG': JSON.stringify(process.env.DEBUG) } ),
  ],

  devServer: {
    // configuration for webpack-dev-server
    contentBase: './app/Public',  //source of static assets
    contentBase: path.join(__dirname, 'dist'),
    writeToDisk: true,
    inline: true,
    historyApiFallback: true,
    port: 9000 // port to run dev-server
    //host: '0.0.0.0'
  }
};