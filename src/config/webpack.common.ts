import * as path from "path"
import * as webpack from "webpack"
import * as HtmlWebpackPlugin from "html-webpack-plugin"
import * as ExtractTextPlugin from "extract-text-webpack-plugin"

const config: webpack.Configuration = {
  entry: {
    bundle: "./src/app/index.tsx",
  },
  output: {
    path: __dirname + "/../../dist/app",
    publicPath: "/",
    filename: "[hash].bundle.js",
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      // **IMPORTANT** This is needed so that each bootstrap js file required by
      // bootstrap-webpack has access to the jQuery object
      { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff",
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader",
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"],
          publicPath: "/",
        }),
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Tweetch",
      template: "./src/app/index.html",
    }),
    new ExtractTextPlugin({
      filename: "[hash].style.css",
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'API_HOST': JSON.stringify(process.env.API_HOST)
      }
    })
  ],
}

export default config
