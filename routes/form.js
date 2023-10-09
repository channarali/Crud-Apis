const exp =require("express")
const router =exp.Router()
const postController=require('../controllers/form')

// creating routes user controllers

router.post("/createdat" ,postController.createdat)
router.get("/getAlldata" ,postController.postAlldata)
// router.get("/getbyID/:id" ,postController.getbyID)
// router.put("postupdate/:id" ,postController.updatingById)
// router.delete("postdelete/:id"postController.deletebyid)
module.exports = router