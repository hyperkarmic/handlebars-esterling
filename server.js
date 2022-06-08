const express = require('express')

const hbs = require('express-handlebars')

const app = express()
app.engine(
  'hbs',
  hbs.engine({
    extname: '.hbs',
  })
)
app.set('view engine', 'hbs')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('home', { title: 'home page', name: 'slim shady' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'about', contents: 'spleen and ideal' })
})

app.get('/if', (req, res) => {
  res.render('if', { title: 'if', nam: 'shasame and reproach' })
})

app.get('/unless', (req, res) => {
  res.render('if', { content: 'if', nam: 'shasame and reproach' })
})

app.get('/partial', (req, res) => {
  res.render('partial', { content: 'if', nam: 'shasame and reproach' })
})

app.listen(3000)
