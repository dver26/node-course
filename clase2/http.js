const http = require('node:http')

console.log(process.env)

const desiredPort = process.env.PORT ?? 1234

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/contacto') {
    res.statusCode = 200 // OK
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>Contacto</h1>')
  } else {
    res.statusCode = 404 // NOT FOUND
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end('<h1>404</h1>')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`server listening on port http://localhost:${desiredPort}`)
})
