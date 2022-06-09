const express = require('express')

const hbs = require('express-handlebars')

const app = express()
const bbs = hbs.create({
  extname: '.hbs',
  //create custom helpers
  helpers: {
    calculation: function (value) {
      return value + 7
    },
    list: function (value, options) {
      // value === people
      let out = '<ul>'

      for (let i = 0; i < value.length; i++) {
        out = out + '<li>' + options.fn(value[i]) + '</li>'
      }
      return out + '</ul>'
    },
  },
})

app.engine('hbs', bbs.engine)
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

app.get('/lookup', (req, res) => {
  res.render(
    'lookup',
    (user = {
      user: { content: 'screw you' },
      arr: ['mouser', 'ratter', 'pigeon poker'],
    })
  )
})

app.get('/helper', (req, res) => {
  res.render('helper', {
    title: 'helper',
    name: 'slim shady',
    people: [
      { firstName: 'Stephen Patrick', lastName: 'Morrissey' },
      { firstName: 'Johnny', lastName: 'Marr' },
    ],
  })
})

app.listen(3000)
