import * as webpack from "webpack"
import * as merge from "webpack-merge"
import commonConfig from "./webpack.common"

const config: webpack.Configuration = {
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
  ]
}

export default merge(commonConfig, config)
