'use strict'
const fs = require('fs')
const path = require('path')
const chalk = require('chalk')
const express = require('express')
const webpack = require('webpack')
const webpackConfig = require('./webpack.dev')
const config = require('./config')

const app = express()

const port = config.port
webpackConfig.entry.client = [
  `webpack-hot-middleware/client?reload=true`,
  webpackConfig.entry.client
]

let compiler

try {
  compiler = webpack(webpackConfig)
} catch (err) {
  console.log(err.message)
  process.exit(1)
}

const devMiddleWare = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false,
    hash: false,
    timings: false
  }
})
app.use(devMiddleWare)
app.use(require('webpack-hot-middleware')(compiler))

const mfs = devMiddleWare.fileSystem
const file = path.join(webpackConfig.output.path, 'index.html')

console.log(`\n  > VuePack is running at ${chalk.yellow(`http://localhost:${port}`)}\n`)


devMiddleWare.waitUntilValid()

app.get('*[^\.css|\.js|\.html?]$', (req, res) => {
  devMiddleWare.waitUntilValid(() => {
    const html = mfs.readFileSync(file)
    res.end(html)
  })
})
app.get('*[\.css|\.js|\.html?]$', (req, res) => {
  devMiddleWare.waitUntilValid(() => {
    var file1 = path.join(webpackConfig.output.path, req.url.substr(1))
    
    const html = mfs.readFileSync(file1)
    res.end(html)
  })
})
app.listen(port)
