const http = require('node:http')

const dittoJSON = require('./pokemon/ditto.json')

const processRequest = (req, res) => {
  const { method, url } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJSON))
        default:
          res.statusCode = 404
          res.end('<h1>404 NOT FOUND</h1>')
      }
      break
    case 'POST':
      switch (url) {
        case '/pokemon': {
          let body = ''

          // escuchamos el evento data
          req.on('data', (chunk) => {
            body += chunk.toString()
          })

          req.on('end', () => {
            const data = JSON.parse(body)
            // llamar a BBDD para guardar la info
            res.writeHead(201, {
              'Content-Type': 'application/json; charset=utf-8'
            })
            res.end(JSON.stringify(data))
          })
          break
        }

        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/plain; charset=utf-8')
          return res.end('404 NOT FOUND')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(1234, () => {
  console.log('server listening on port http://localhost:1234')
})
