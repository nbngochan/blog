const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')

const app = express()
const port = 3000

console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'))

// Template engine
app.engine('hbs', engine(
  {
    extname: '.hbs',
  }
))
app.set('view engine', 'hbs') 
app.set('views', path.join(__dirname, 'resource/views'))

// route function
app.get('/', (req, res) => {
    res.render('home')
})

// app.get('/', (req, res) => {
//   res.render('news')
// })

// localhost: 127.0.0.1 - localhost

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

