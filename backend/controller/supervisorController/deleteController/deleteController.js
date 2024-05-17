const {deleteSupervisorById}=require("../../../services/supervisorServices/deleteService/deleteService")

const deleteSupervisor=async(req,res)=>{
    const deleteResult=await (deleteSupervisorById(req.query.id));
    res.send(deleteResult)
}
module.exports={deleteSupervisor};