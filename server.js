const express = require('express')

const pokemon = require('./models/pokemon')

const jsxEngine = require('jsx-view-engine')

const app = express()

const PORT = 3000

app.set('view engine', 'jsx')

app.engine('jsx', jsxEngine())

app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!')
})

app.get('/pokemon', (req, res) => {
    res.render('Index.jsx', {pokemon})
})

app.get('/pokemon/:id', (req,res) => {
    res.render('Show.jsx', { pokemon: pokemon[req.params.id] })
})

app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
}) 