const db = require('../models')
const jwt = require('jsonwebtoken')

exports.signIn = async function (req, res, next) {
  try {
    const user = await db.User.findOne({
      email: req.body.email
    })

    const isMatch = await user.comparePassword(req.body.password)
    if (isMatch) {
      const token = jwt.sign({
        email: user.email
      }, process.env.SECRET_KEY)
      return res.status(200).json({
        token,
        email: user.email
      })
    } else {
      throw new Error('invalid credentials')
      // return next({
      //   status: 400,
      //   message: 'invalid credentials'
      // })
    }
  } catch(err) {
    return next({
      status: 400,
      message: err
    })
  }
}
