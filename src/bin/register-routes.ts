import express from 'express'

const app = express()

app.use('/', require('@routes/index'))
app.use('/category', require('@routes/category'))

export default app
