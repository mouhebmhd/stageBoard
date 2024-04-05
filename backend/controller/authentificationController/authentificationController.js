const  authentificationAsAdminController  = require("../../controller/authentificationController/authentificationControllerAsAdmin");
const  authentificationAsInternController  = require("../../controller/authentificationController/authentificationControllerAsIntern");
const  authentificationAsSupervisorController  = require("../../controller/authentificationController/authentificationControllerAsSupervisor");
const { createToken } = require("../../services/authentification/createTokenService");
const axios=require("axios")
const authentificationController = async (req, res) => {
    try {
        const loginAdmin=await authentificationAsAdminController(req,res)
        const loginIntern=await authentificationAsInternController(req,res)
        const loginSupervisor=await authentificationAsSupervisorController(req,res)
        if(loginAdmin.status=="success")
        {
            res.send(loginAdmin)
        }
        if(loginIntern.status=="success")
        {
            res.send(loginIntern)
        }
        if(loginSupervisor.status=="success")
        {
            res.send(loginSupervisor)
        }
        res.send({ status: "error", message: "Invalid credentials" });
    
       
    } catch (error) {
        console.error("Error in authenticationController:", error);
        res.status(500).json({ status: "error", message: "An error occurred during authentication" });
    }
};

module.exports =  authentificationController;
