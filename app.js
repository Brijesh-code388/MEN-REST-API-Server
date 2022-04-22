const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'

const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection
con.on('open', () => {
    console.log('connnected...')
})


//router
const alienRouter = require('./routes/aliens.js')


app.use('/aliens', alienRouter)

app.use(express.json())

app.listen(8000, () => {
    console.log('server started')
})