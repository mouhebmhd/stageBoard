const {deleteInternById}=require("../../../services/internServices/deleteService/deleteService")

const deleteIntern=async(req,res)=>{
    const deleteResult=await (deleteInternById(req.query.id));
    res.send(deleteResult)
}
module.exports={deleteIntern};