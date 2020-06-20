import http from 'http'
import app from './bin/app'
import { handleError, normalizePort, onError } from './helpers/error'

const debug = require('debug')('nodestr:server')
const port = normalizePort()

app.set('port', port)

const server = http.createServer(app)

app.use((err: any, req: any, res: any, next: any) => { handleError(err, res) })

server.listen(port, () => { console.log('API rodando na port ' + port) })
server.on('error', onError)
server.on('listening', onListening)

function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port

  debug('Listening on ' + bind)
}
