const express = require('express')
const app = express()
const db = require('./config/db')
const consign = require('consign')


consign()
  .then('./config/middlewares.js')
  .into(app)


app.listen(3000, () => {
    console.log('server up')
})