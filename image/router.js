const { Router } = require('express')
const Image = require('../image/model')
const router = new Router

router.get(
  '/image',
  (req, res, next) => {
    Image
    .findAll()
    .then(allImages => res.json(allImages))
    .catch(err => next(err))
})

module.exports = router