const {updateService}=require("../../../services/internServices/updateService/updateService")
const updateController=async (req,res)=>{
    const updateResult=await updateService(req.query.id,req.body);
    res.send(updateResult)
}
module.exports={updateController}
