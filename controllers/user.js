const Todo = require("../models/user");
// create user post Api
const createdata = async (req, res) => {
  try {
    const todo = Todo({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    await todo.save();
    res.json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//
const getAlldata = async (req, res) => {
  try {
    
    const gettodos = await Todo.find({},{"password":0 , "name":0 });
    res.json(gettodos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const getbyID = async (req, res) => {
    try {
      let dataAgainstId = await Todo.findById(req.params.id);
      if(!dataAgainstId){
        return res.status(404).json({message: "not found"})
      }
      res.json(dataAgainstId)
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  const deletebyid = async(req,res)=>{
    try{
        let deleteagainstid =await Todo.findByIdAndDelete(req.params.id)
        if(!deleteagainstid){
            return res.status(404).json({message:"not found"})
        }
        res.json("successfully deleted")
    } catch (error) {
        res.status(500).json({ error: error.message });
      }
    };
const updatingById = async (req, res) => {
    try {
        const{name,email,password}=req.body;
        
      let dataAgainstId = await Todo.findByIdAndUpdate(req.params.id,
      {name,email,password},
      {new:true}
      )
      if(!dataAgainstId){
        return res.status(404).json({message: "not found"})
      }
      res.json(dataAgainstId)
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



// exporting modules
module.exports = {
  createdata,
  getAlldata,
  getbyID,
  deletebyid,
  updatingById
};
