import * as path from "path"
import * as webpack from "webpack"
import * as HtmlWebpackPlugin from "html-webpack-plugin"

const config: webpack.Configuration = {
  entry: {
    bundle: "./src/app/index.tsx",
  },
  output: {
    path: __dirname + "/../dist/app",
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
      title: "Teetch",
      template: "./src/app/index.html",
    }),
  ],
}

export default config
