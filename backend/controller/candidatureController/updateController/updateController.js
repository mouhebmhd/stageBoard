const {updateCandidatureById}=require("../../../services/candidatureServices/updateServices/updateServics")
const updateController=async (req,res)=>{
    try
    {
        console.log(type(req.body))
    const updateResult=await updateCandidatureById(req.body.id,req.body);
    res.send(updateResult)
    }
    catch(error)
    {
        res.send({ status: "failed", message: 'Error connecting to database:', error: error });
    }

    
}
module.exports={updateController}
