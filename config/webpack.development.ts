import * as webpack from "webpack"
import * as merge from "webpack-merge"
import commonConfig from "./webpack.common"

const config: webpack.Configuration = {
  devServer: {
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8080
  },
}

export default merge(commonConfig, config)
