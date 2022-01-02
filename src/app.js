const express = require('express')
const path = require('path')
const app = express()
app.get('/', (req, res) => {
  res.render('home')
})
app.use(express.static('css'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/index', (req, res) => {
  res.render('index', {
    subject: 'Pug template engine',
    name: 'our template',
    link: 'https://google.com'
  })
})
const PORT = 2080
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
