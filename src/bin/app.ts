import express from 'express'
import bodyParser from 'body-parser'

require('custom-env').env(true)

const app = express()

app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World' })
})

module.exports = app
