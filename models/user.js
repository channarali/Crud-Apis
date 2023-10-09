const mongoose =require('mongoose')
const todoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },



})

const Todo = mongoose.model("user",todoSchema)
module.exports=Todo;