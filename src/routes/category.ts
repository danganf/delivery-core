'use restrict'

import express from 'express'
import controller from '@controllers/CategoryController'

const router = express.Router()

router.get('/', controller.get)
// router.post('/', controller.post)

module.exports = router
