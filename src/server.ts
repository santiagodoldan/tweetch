import express from 'express'
import * as path from 'path'

const app = express()

const isProduction = process.env.NODE_ENV === 'production'
const port = isProduction ? process.env.PORT : 3000
const publicPath = path.resolve(__dirname, '../dist/app')

// We point to our static assets
app.use(express.static(publicPath))

// And run the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
