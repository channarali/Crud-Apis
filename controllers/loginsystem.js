const bcrypt =require('bcrypt')
const jwt= require('jsonwebtoken')
const Logintest =require('../models/loginsystem')
//signup Api or controller functions

const loginuser=async (req,res)=>{
    try {
        const{username,email,password}=req.body
        const hashpassword = await bcrypt.hash(password,10)
        const loginUser = new Logintest({username,email,password :hashpassword})
        await loginUser.save();
        res.status(201).json({message:"user created successfully"})
    } catch (error) {
        res.status(500).json({error:error.message})
    }
    }

    const login =async(req,res)=>{

        try {
            const {email,password}=req.body;
            const user=await Logintest.findOne({email})
            if(user && await bcrypt.compare(password,user.password)){
                const token = jwt.sign({userId:user.id},"84a516841ba77a5b4648de2cd0dfcb30ea46dbb4",{expiresIn:"1hr"})
                res.status(200).json({token})
                
            }else{
                res.status(401).json({error:"invalid credentials"})
            }
            
        } catch (error) {
            res.status(500).json({error:error.message})
        }
    }
module.exports ={
    loginuser,
    login
}