const {updateCandidatureById}=require("../../../services/candidatureServices/updateServices/updateServics")
const updateController=async (req,res)=>{
    try
    {
    if(req.body.applicationStatus=='Demande acceptée')
        {
           const {getProjectById}=require("../../../services/projectServices/getService/getService")
           var project=await getProjectById(req.body.projectId)
           project=project.project
           project['supervisorId']=req.body.supervisorId
           project['internId']=req.body.internId
           const {updateProjectById}=require("../../../services/projectServices/updateService/updateService")
           updateProjectById(project.projectId,project)
        }
     const updateResult=await updateCandidatureById(req.body.id,req.body);
    res.send(updateResult)  
    }
    catch(error)
    {
        res.send({ status: "failed", message: 'Error connecting to database:', error: error });
    }

    
}
module.exports={updateController}
