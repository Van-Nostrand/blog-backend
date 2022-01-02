const db = require('../models')

exports.getAllPosts = async function (req, res, next) {
  try {
    const allPosts = await db.BlogPost.find()
    if (!allPosts) throw new Error('error getting blog posts')
    return res.render('blog', {allPosts})
  } catch(err) {
    console.error(err)
  }
}

exports.createPost = async function (req, res, next) {
  try {
    const post = await db.BlogPost.create({...req.body})
    return res.render('blog', {allPosts: [post]})
  } catch(err) {
    return next(err)
  }
}
