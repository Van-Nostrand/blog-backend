const mongoose = require('mongoose')
mongoose.set('debug', true)

mongoose.Promise = Promise
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.pchwe.mongodb.net/${process.env.MONGODB_DATABASE_NAME}?retryWrites=true&w=majority`

mongoose.connect(uri || 'mongodb://localhost/', {
  keepAlive: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports.BlogPost = require('./blogpost')



// const { MongoClient } = require('mongodb');
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
