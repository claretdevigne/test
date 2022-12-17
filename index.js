const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(express.static('public'))

app.listen(80, () => {
    console.log('RUNNING -->')
})