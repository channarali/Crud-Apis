const express = require("express")
const app= express()
const dotenv=require('dotenv')
const bodyParser= require("body-parser")
const userRoutes =require ('./routes/user')
const postRoutes =require ('./routes/form')
const loginsystem =require ('./routes/loginsystem')
const mongoose =require('./config/connection')
dotenv.config()
 let port = process.env.PORT || 4000;
 app.use(bodyParser.json())
 app.use(express.static("public"))
 app.use('/loginuser',loginsystem)
 app.use('/user', userRoutes)
 app.use('/post',postRoutes)

  app.listen(port,"localhost",(req,res)=>{
    console.log(`server starting at : http://localhost:${port}`)
  })
