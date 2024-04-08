const  authentificationAsAdminController  = require("../../controller/authentificationController/authentificationControllerAsAdmin");
        const  authentificationAsInternController  = require("../../controller/authentificationController/authentificationControllerAsIntern");
        const  authentificationAsSupervisorController  = require("../../controller/authentificationController/authentificationControllerAsSupervisor");

const authentificationController = async (req, res) => {
    try {
        const loginAdmin = await authentificationAsAdminController(req, res);
        const loginIntern = await authentificationAsInternController(req, res);
        const loginSupervisor = await authentificationAsSupervisorController(req, res);
        
        let response;

        if (loginAdmin.status === "success") {
            response = loginAdmin;
        } else if (loginIntern.status === "success") {
            response = loginIntern;
        } else if (loginSupervisor.status === "success") {
            response = loginSupervisor;
        } else {
            response = { status: "error", message: "Invalid credentials" };
        }

        res.send(response);
    } catch (error) {
        console.error("Error in authenticationController:", error);
        res.send({ status: "error", message: "An error occurred during authentication" });
    }
};

module.exports = authentificationController;
