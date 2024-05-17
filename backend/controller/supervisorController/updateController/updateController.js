const {updateService}=require("../../../services/supervisorServices/updateService/updateService")
const updateController=async (req,res)=>{
    try
    {
    const updateResult=await updateService(req.body);
    res.send(updateResult)
    }
    catch(error)
    {
        res.send({ status: "failed", message: 'Error connecting to database:', error: error });
    }

    
}
module.exports={updateController}
