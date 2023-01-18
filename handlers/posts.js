const db = require('../models')

exports.getAllPosts = async function (req, res, next) {
  try {
    const allPosts = await db.BlogPost.find()
    if (!allPosts) throw new Error('error getting blog posts: ')
    return res.render('blog', { allPosts })
  } catch(err) {
    console.error(err)
  }
}

exports.createPost = async function (req, res, next) {
  try {
    const post = await db.BlogPost.create({ ...req.body })
    if (!post) throw new Error('error creating a post: ')
    console.log('post is ', post)
    return res.render('blog', { allPosts: [post] })
  } catch(err) {
    return next(err)
  }
}

exports.editPost = async function (req, res, next) {
  try {
    const post = await db.BlogPost.findById(req.params.id)
    if (!post) throw new Error('Error retrieving post in editPost:')
    // else return res.send(JSON.stringify(post))
    else return res.render('editBlog', { post, editMode: true })
  } catch (err) {
    console.error(err)
  }
}
