const express = require('express')
const hbs = require('hbs')
const path = require('path')

const app = express()
const port = 4242

const viewsPath = path.join(__dirname, '../model/views')
const partialsPath = path.join(__dirname, '../model/partials')
const generalPath = path.join(__dirname, '../general')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use('/general', express.static(generalPath))

hbs.registerPartials(partialsPath)

app.get('/', (req, res) => {

    res.render('index', {
        title: 'weather-app',
        name: 'vwsharon'
    })
})

app.get('*', (req, res) => {
    res.render('notFound', {
        title: 'Not-Found',
        name:'vwsharon',
        errorMessage:'404 Page Not Found !'
    })
})

app.listen(port, () => {
    console.log('Server is up at http://localhost:' + port + '/')
})