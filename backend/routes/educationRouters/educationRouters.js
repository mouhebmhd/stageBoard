const {getAllEducations,postEducation,deleteEducation,updateEducation}=require("../../controller/educationController/educationController") 
const router=require("express").Router()

router.get("/education/getAllEducations/",async (req,res)=>{
    getAllEducations(req,res)
})
router.post("/education/addNewEducation/",async (req,res)=>{
    postEducation(req,res)
})
router.delete("/education/deleteEducation/",async (req,res)=>{
    deleteEducation(req,res)
})
router.put("/education/updateEducation/",async (req,res)=>{
    updateEducation(req,res)
})
module.exports=router