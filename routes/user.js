const express =require("express")
const router =express.Router()
const userController=require('../controllers/user')

// creating routes user controllers

router.post("/createdata" ,userController.createdata)
router.get("/getAlldata" ,userController.getAlldata)
router.get("/getbyID/:id" , userController.getbyID)
router.put("/userupdate/:id" , userController.updatingById)
router.delete("/userdelete/:id",userController.deletebyid)
module.exports = router