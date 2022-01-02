const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  author: String,
  title: String,
  body: String,
  date: Date
}, {
  timestamps: true
})

postSchema.methods.editBlogPost = async function (data, next) {
  try {
    if (data.author) this.author = data.author
    if (data.title) this.title = data.title
    if (data.body) this.body = data.body
    if (data.date) this.date = data.date
  } catch(err) {
    return next(err)
  }
}

const BlogPost = mongoose.model('BlogPost', postSchema)

module.exports = BlogPost
