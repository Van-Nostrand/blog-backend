const mongoose = require('mongoose')
mongoose.set('debug', true)

mongoose.Promise = Promise

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/', {
  keepAlive: true,
  useNewUrlParser: true,
  useCreateIndex: true
})

module.exports.BlogPost = require('./blogpost')
