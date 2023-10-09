const mongoose=require("mongoose")
const url="mongodb+srv://channarali:Ami12345@cluster1.ptyh9zh.mongodb.net/"
mongoose.connect(url, {
    useNewUrlParser:true,
    useunifiedTopology:true
}).then(()=>{
    console.log("db connected")
})

const db= mongoose.connection;

db.on("error",console.error.bind(console,"Connection failed"))


module.exports=mongoose;