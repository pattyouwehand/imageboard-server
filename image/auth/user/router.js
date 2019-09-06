const { Router } = require('express')
const router = new Router()
const User = require('./model')
const bcrypt = require('bcryptjs')

router.post(
  '/user', (req, res, next) => {
  const user = {
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  }

    User
    .create(user)
    .then(newUser =>res.send(newUser))
    .catch(err => next(err))
})

module.exports = router