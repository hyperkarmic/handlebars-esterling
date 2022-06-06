const express = require('express')

const hbs = require('express-handlebars')

const app = express()
app.engine('handlebars', hbs.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.listen(3000)
