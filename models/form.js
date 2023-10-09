
const mong =require('mongoose')
// let validateEmail = function(email) {
//     var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     return re.test(email)
// };
const postdata = new mong.Schema({
    name:{
        type:String,
        // uppercase:true,
        required:true
    },
    l_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type:String,
        required:true,
        match:/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
        minlength:5

    },

 

})

const POST = mong.model("use",postdata)
module.exports=POST;