var express = require('express'),
    router = express.Router(),
    fetchController = require('../controllers')

router
  .post('/fetch', fetchController)

module.exports = router