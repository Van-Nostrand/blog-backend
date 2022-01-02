const express = require('express')
const router = express.Router({
  mergeParams: true // what does this do?
})
const fakePosts = require('../constants/temp-data').fakePosts
// const HANDLERS = require('../handlers/auth')

router.route('/').get((req, res) => {
  res.render('home')
})

router.route('/blog').get((req, res) => {
  // res.render('blog', {data: 'a string being passed in'})
  res.render('blog', {fakePosts})
})

router.route('/createpost')
  .get((req, res) => {
    res.render('createpost')
  })
  .post((req, res, next) => {
    console.log('request!', req.body)
    // console.log('request!', Object.keys())
    res.render('createpost')
  })

module.exports = router
