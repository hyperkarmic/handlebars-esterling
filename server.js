const express = require('express')

const hbs = require('express-handlebars')

const app = express()
app.engine('handlebars', hbs.engine({}))
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('home', { title: 'home page', name: 'slim shady' })
})

app.get('/about', (req, res) => {
  res.render('about', { title: 'about', contents: 'spleen and ideal' })
})

app.listen(3000)
