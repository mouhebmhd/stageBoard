const { getProjectById,getProjectByInternId,getProjectBySupervisorId,getProjects}=require("../../../services/projectServices/getService/getService")



const getProjectControllerById=async(req,res)=>{
    const result=await getProjectById(req.query.id);
    res.send(result)
}
const getProjectControllerByInternId=async(req,res)=>{
    const result=await getProjectByInternId(req.query.id);
    res.send(result)
}
const getSupervisorControllerById=async(req,res)=>{
    const result=await getProjectBySupervisorId(req.query.id);
    res.send(result)
}
const getProjectsController=async(req,res)=>{
    const result=await getProjects();
    res.send(result)
}
module.exports={getProjectControllerById,getProjectControllerByInternId,getSupervisorControllerById,getProjectsController}