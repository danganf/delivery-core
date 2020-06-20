class ErrorHandler extends Error {
  public statusCode: any;
  public message: string;

  constructor (statusCode: any, message: string) {
    super()
    this.statusCode = statusCode
    this.message = message
  }
}

const handleError = (err: { statusCode: any; message: string }, res: { status: (arg0: any) => { (): any; new(): any; json: { (arg0: { status: string; statusCode: any; message: any }): void; new(): any } } }) => {
  const { statusCode, message } = err
  res.status(statusCode).json({
    status: 'error',
    statusCode,
    message
  })
}

const normalizePort = () => {
  const val = process.env.PORT || '3000'
  const port = parseInt(val, 10)
  if (isNaN(port)) return val
  if (port >= 0) return port

  return false
}

const onError = (error: { syscall: string; port: string; code: any }) => {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof error.port === 'string' ? 'Pipe ' + error.port : 'Port ' + error.port

  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges')
      process.exit(1)
    case 'EADDRINUSE':
      console.error(bind + ' is already in use')
      process.exit(1)
    default:
      throw error
  }
}

export {
  ErrorHandler,
  handleError,
  normalizePort,
  onError
}
