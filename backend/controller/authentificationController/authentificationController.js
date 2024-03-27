const {loginService}=require("../../services/authentification/loginService");
const {createToken}=require("../../services/authentification/createTokenService")
const {validateToken}=require("../../services/authentification/validateTokenService")
const authentificationController=async (req,res)=>{
const loginResult=await loginService(req.body.email,req.body.password);
if(loginResult.status==="success")
{
    const secretKey=(process.env.SECRET_KEY);
    const token=createToken(loginResult.user._id,secretKey);     
    res.cookie('currentUserToken',token,{
        maxAge:9000000,
        httpOnly:true,
        secure:true
    })
    res.send(loginResult)
}
}
module.exports={authentificationController};