// webpack.config.js
require("ts-node").register({
  project: "./tsconfig.json"
})

const env = process.env.NODE_ENV || "development"

module.exports = require(`./src/config/webpack.${env}.ts`)
