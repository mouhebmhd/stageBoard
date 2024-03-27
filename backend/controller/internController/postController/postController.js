const {postIntern}=require("../../../services/internServices/postService/postService")
const postController=async(req,res)=>{
    const postResult=await postIntern(req.body);
    res.send(postResult);
}
module.exports={postController}