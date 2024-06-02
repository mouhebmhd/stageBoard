const express = require("express");
const router = express.Router();
const {postController}=require("../../controller/notificationsController/postNotification/postNotification")
const {getController}=require("../../controller/notificationsController/getController/getController")
router.get("/notifications/getNotifications",(req,res)=>{
    getController(req,res);
}) 
router.post("/notifications/postNotification/",(req,res)=>{
    postController(req,res)
})
module.exports=router;