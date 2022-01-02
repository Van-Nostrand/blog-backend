require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const PORT = 2080
const routes = require('./routes')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(cors())
app.use(express.static('css'))
app.use(bodyParser.json())

app.use('/', routes)

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
