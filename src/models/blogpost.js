const mongoose = require('mongoose')

const ObjectId = mongoose.schema.ObjectId

const postSchema = new mongoose.schema({
  author: ObjectId,
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
