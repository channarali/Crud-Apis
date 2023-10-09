const POST = require("../models/form");
// create user post Api
const createdat = async (req, res) => {
  try {
    const Post = POST({
      name: req.body.name,
      l_name:req.body.l_name,
      email: req.body.email,
      password: req.body.password,

    });
    await Post.save();
    res.json(Post);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};


const postAlldata = async (req, res) => {
  try {
    
    const posttodos = await POST.find({});
    res.json(posttodos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// const getbyID = async (req, res) => {
//     try {
//       let dataAgainstId = await Todo.findById(req.params.id);
//       if(!dataAgainstId){
//         return res.status(404).json({message: "not found"})
//       }
//       res.json(dataAgainstId)
      
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };

//   const deletebyid = async(req,res)=>{
//     try{
//         let deleteagainstid =await Todo.findByIdAndDelete(req.params.id)
//         if(!deleteagainstid){
//             return res.status(404).json({message:"not found"})
//         }
//         res.json("successfully deleted")
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//       }
//     };
// const updatingById = async (req, res) => {
//     try {
//         const{name,email,password}=req.body;
        
//       let dataAgainstId = await Todo.findByIdAndUpdate(req.params.id,
//       {name,email,password},
//       {new:true}
//       )
//       if(!dataAgainstId){
//         return res.status(404).json({message: "not found"})
//       }
//       res.json(dataAgainstId)
      
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };



// exporting modules
module.exports = {
createdat,
postAlldata
};
