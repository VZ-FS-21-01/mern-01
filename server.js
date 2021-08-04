require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const app = express()

const apiRoutes = require('./backend/routes/apiRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(result => {
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))
    })
    .catch(err => console.log(err))

app.use('/api', apiRoutes)