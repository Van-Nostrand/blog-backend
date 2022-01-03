const express = require('express')
const { getAllPosts, createPost, editPost } = require('../handlers/posts')
const router = express.Router({
  mergeParams: true // what does this do?
})
const fakePosts = require('../constants/temp-data').fakePosts

router.route('/')
  .get((req, res) => res.render('home'))

router.route('/blog')
  .get(getAllPosts)

router.route('/createpost')
  .get((req, res) => res.render('createpost'))
  .post(createPost)

router.route('/editpost/:id')
  .get(editPost)

router.route('/api/test')
  .post((req, res) => res.send('received post request with data' + req.body))

module.exports = router
