var express = require('express')
var router = express.Router()

/* POST user sets a message. */
router.post('/set-message', (req, res, next) => {
  let {text} = req.body
  res.send({msg: text})
})

module.exports = router