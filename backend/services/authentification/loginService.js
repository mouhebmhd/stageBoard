const supervisorSchema = require("../../schemas/supervisorSchema");
const internSchema = require("../../schemas/internSchema");
const adminSchema = require("../../schemas/administratorSchema");
const bcrypt = require("bcrypt");

async function loginService(email, password) {
     try {
        let supervisor = await supervisorSchema.findOne({ supervisorEmail: email });
         if (supervisor) {
            const passwordMatch = await bcrypt.compare(supervisorPassword, supervisor.password);
            if (passwordMatch) {
                return { status: "success", userType: "supervisor", user: supervisor };
            }
        }
         

        let intern = await internSchema.findOne({ internEmail: email });
        if (intern) {
            const passwordMatch = await bcrypt.compare(password, intern.internPassword);
            if (passwordMatch) {
                return { status: "success", userType: "intern", user: intern };
            }
           
        } 
       let admin = await adminSchema.findOne({ adminEmail: email });
        if (admin) {
            const passwordMatch = await bcrypt.compare(password, admin.adminPassword);
            if (passwordMatch) {
                return { status: "success", userType: "admin", user: admin };
            }
        } 

        return { status: "failed", message: "User is either not logged in or session expired or email or password are icorrect" };
    } catch (error) {
        console.error("Error occurred during login:", error);
        return { status: "error", message: "An error occurred during login",error };
    }  
}
module.exports={loginService}