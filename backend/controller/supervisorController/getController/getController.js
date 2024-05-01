const {getAllSupervisors,getSupervisorById}=require("../../../services/supervisorServices/getService/getService")
const getSupervisors=async(req,res)=>{
    const result=await getAllSupervisors();
    res.send(result)
}
const getSupervisorByID=async(req,res)=>{
    const result=await getSupervisorById(req.query.id);
    res.send(result)
}
module.exports={getSupervisors,getSupervisorByID}