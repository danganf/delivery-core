import bodyParser from 'body-parser'
import register from './register-routes'

require('custom-env').env(true)

register.use(bodyParser.json({ limit: '5mb' }))
register.use(bodyParser.urlencoded({ extended: false }))

export default register
