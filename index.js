const express = require('express')
const app = express()

const cors = require('cors')
const corsMiddleware = cors()
const bodyParser = require('body-parser')
const parserMiddleware = bodyParser.json()
const login = require('./image/auth/router')

const port = process.env.PORT || 4000
const db = require('./db')

const Image = require('./image/model')
const imageRouter = require('./image/router')
const userRouter = require('../server/image/auth/user/router')


app.get('/test', (req, res) => res.send('TESTING'))
app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(corsMiddleware)
app.use(parserMiddleware)
app.use(imageRouter)
app.use(login)
app.use(userRouter)