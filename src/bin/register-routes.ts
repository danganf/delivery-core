import express from 'express'
const app = express()

app.use('/', require('./routes/index'))

export default app
