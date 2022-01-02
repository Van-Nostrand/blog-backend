const express = require('express')
const router = express.Router({
  mergeParams: true // what does this do?
})
// const HANDLERS = require('../handlers/auth')

router.route('/').get((req, res) => {
  res.render('home')
})

module.exports = router
