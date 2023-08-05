const express = require('express')
const app = express()
const ditto = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

// para tratar los chunks de la request
app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan las request con un method POST y con un Content-Type application/json

//   let body = ''

//   // escuchamos el evento data
//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // mutamos la request y ponemos la información dentro del body
//     req.body = data
//     next()
//   })

//   next()
// })

app.get('/', (req, res) => {
  res.send('<h1>Mi página</h1>')
})

app.get('/pokemon/ditto', (req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

// la última a la que va a llegar, por tanto solo cuando no ha coincidido con ninguno
app.use((req, res) => {
  res.status(404).send('<h1>404 NOT FOUND</h1>')
})

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`)
})
