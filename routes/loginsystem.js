const exp =require("express")
const router =exp.Router()
const postController=require('../controllers/loginsystem')

// creating routes user controllers

router.post("/signup" ,postController.loginuser)
router.post("/login",postController.login)
module.exports = router