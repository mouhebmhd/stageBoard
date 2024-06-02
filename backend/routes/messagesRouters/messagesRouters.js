const express = require("express");
const router = express.Router();
const {createMessage}=require("../../controller/messagesController/postController/postController")
const { getMessage, getMessagesByIntern, getMessagesBySupervisor, getMessages } =require("../../controller/messagesController/getController/getController");
router.get("/messages/getMessages",(req,res)=>{
    getMessages(req,res);
})
router.post("/messages/postMessage/",(req,res)=>{
    createMessage(req,res)
})
module.exports=router;