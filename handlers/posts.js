const db = require('../models')

exports.getAllPosts = async function (req, res, next) {
  try {
    const allPosts = await db.BlogPost.find()
    if (!allPosts) throw new Error('error getting blog posts')
    return res.render('blog', { allPosts })
  } catch(err) {
    console.error(err)
  }
}

exports.createPost = async function (req, res, next) {
  try {
    const post = await db.BlogPost.create({ ...req.body })
    return res.render('blog', { allPosts: [post] })
  } catch(err) {
    return next(err)
  }
}

exports.editPost = async function (req, res, next) {
  try {
    // console.log('looking for a post', req.params)
    const post = await db.BlogPost.findById(req.params.id)
    // console.log('found a post!!', post)
    if (post) {
      // console.log('post exists')
      // return res.redirect(307, '/editBlog', { post })
      return res.render('editBlog', { post })
    }
    else throw new Error('Error retrieving post in editPost:')
  } catch (err) {
    console.error(err)
  }
}
