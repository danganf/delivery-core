import express from 'express'
import bodyParser from 'body-parser'

require('custom-env').env(true)
require('./db')

const app = express()

app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', require('@routes/index'))
app.use('/category', require('@routes/category'))

export default app
