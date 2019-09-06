const express = require('express')
const app = express()

const cors = require('cors')
const corsMiddleware = cors()
app.use(corsMiddleware)

const bodyParser = require('body-parser')
const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

const port = process.env.PORT || 4000
const db = require('./db')

const Image = require('./image/model')
const imageRouter = require('./image/router')
app.use(imageRouter)

app.get('/test', (req, res) => res.send('TESTING'))
app.listen(port, () => console.log(`Listening on port ${port}`))


