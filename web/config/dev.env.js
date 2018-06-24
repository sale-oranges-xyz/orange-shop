'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // PROXY_URL: '"http://localhost:5555"', // 需要修改
  // PROXY_API: '"/api"'
})
