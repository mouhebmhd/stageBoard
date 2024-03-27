const jwt=require("jsonwebtoken");
const validateToken=(token,secretKey)=>{
    try
    {
        const decoded=jwt.verify(token,secretKey);
        if(decoded)
        {
            return {status:"success",message:"user logged in",decoded}
        }
        else
        {
            return {status:"failed",message:"user is either not logged in or session expired "}

        }
    }
    catch(error)
    {
        return {status:"error",message:"an error has occured while trying to decode token"}
    }
}
module.exports={validateToken}