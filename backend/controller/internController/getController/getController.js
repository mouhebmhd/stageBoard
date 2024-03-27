const {getAllInterns,getInternById}=require("../../../services/internServices/getService/getService")
const getInterns=async(req,res)=>{
    const result=await getAllInterns();
    res.send(result)
}
const getIntern=async(req,res)=>{
    const result=await getInternById(req.params.id);
    res.send(result)
}
module.exports={getInterns,getIntern}