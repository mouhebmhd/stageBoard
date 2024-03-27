const internSchema=require("../../../schemas/internSchema");
const getAllInterns=()=>{
    internSchema.find({})
    .then((interns)=>{
        if(interns)
        {
            return {status:"success",users:users}
        }
        else
        {
            return{status:"failed",message:"no interns found",users:[]}
        }
    })
    .catch((error)=>{
        return{status:"failed",message:"an error has ocurred",error:error}
    })
}
const getInternById=(id)=>{
    internSchema.findById(id)
    .then((intern)=>{
        if(intern)
        {
            return {status:"success",intern}
        }
        else
        {
            return {status:"failed",message:"no user found with the given id"}
        }
    })
    .catch((error)=>{
        return {status:"error",message:"an error has occured",error}
    })
}
module.exports={getAllInterns,getInternById};