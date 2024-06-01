const  { getAllEducationsService ,postEducationService,deleteEducationService,updateEducationService}=require("../../services/educationServices/educationServices");

const getAllEducations=async (req,res)=>{
    const educationResult=await getAllEducationsService();
    res.send(educationResult)
}
const postEducation=async (req,res)=>{
   const postResult=await postEducationService(req.body);
   res.send(postResult)
}
const deleteEducation=async (req,res)=>{
    const deleteResult=await deleteEducationService(req.body.id) 
    res.send(deleteResult)
}
const updateEducation=async (req,res)=>{
const updateResult=await updateEducationService(req.body.educatioId,req.body) 
}
module.exports={getAllEducations,postEducation,deleteEducation,updateEducation}