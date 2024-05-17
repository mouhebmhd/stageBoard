const { deleteProjectById}=require("../../../services/projectServices/deleteService/deleteService")
const deleteProject=async(req,res)=>{
    const result=await deleteProjectById(req.query.id);
    res.send(result)
}

module.exports={deleteProject}