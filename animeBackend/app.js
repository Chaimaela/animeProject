const express = require("express");
const app = express();
var cors = require('cors')

const animes = require('./src/routes/anime');
const mongoose = require("mongoose");
const logger = require("./middlewares/logger");
require('dotenv').config()

app.use(cors())
app.use(express.json())

app.use(logger)

// connect to mongoose
mongoose.connect(process.env.MONGO_URI)
        .then(()=> {
            console.log('connected to database');
        })
        .catch((error)=> console.log('failed connection'))

app.use('/api', animes)



const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})