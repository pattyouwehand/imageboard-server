const express = require('express')
const app = express()
const port = process.env.PORT || 4000

app.get('/test', (req, res) => res.send('TESTING'))
app.listen(port, () => console.log(`Listen to port ${port}`))
