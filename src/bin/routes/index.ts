const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  res.status(200).send({
    title: 'DELIVERY API CORE',
    version: '0.0.1a'
  })
})

module.exports = router
