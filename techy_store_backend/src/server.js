require('dotenv').config()
const app = require('./app')
// const express = require('express')
const mongoose = require('mongoose')
const port = process.env.PORT


mongoose.connect(
    process.env.MONGO_URL,
    {}).then(result => {
        console.log("Mongodb is connected")
        app.listen(port, () => {
          console.log(`Techy store app listening on port ${port}`)
        })  
    }).catch(err => console.log(err))
