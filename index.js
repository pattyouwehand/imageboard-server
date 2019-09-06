const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const db = require('./db')
const Image = require('./image/model')
const imageRouter = require('./image/router')

app.get('/test', (req, res) => res.send('TESTING'))
app.listen(port, () => console.log(`Listening on port ${port}`))

app.use(imageRouter)
