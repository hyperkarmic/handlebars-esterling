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

app.get('/each', (req, res) => {
  res.render('each', {
    guys: {
      pete: 'stinks',
      matt: 'shit actor',
      mark: 'nonk scum',
      ian: 'twatty',
    },
    lists: [
      { items: ['cheese', 'chive', 'onion'] },
      { items: ['tofu', 'rocket', 'shallot'] },
      { items: ['hummous', 'paprika', 'naan'] },
    ],
  })
})

app.listen(3000)
