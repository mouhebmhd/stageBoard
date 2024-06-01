const  loginAsSupervisorService  = require("../../services/authentification/loginAsSupervisorSevice");
const { createToken } = require("../../services/authentification/createTokenService");

const authentificationAsSupervisorController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginResult = await loginAsSupervisorService(email,password);
        
        if (loginResult && loginResult.status === "success") {
            // Create token if login is successful
            const token = createToken(loginResult, process.env.SECRET_KEY,180);
            // Attach the token to a cookie
            console.log({ status: "success", message: "Login successful",token,role:"supervisor",data:loginResult});
            return({ status: "success", message: "Login successful",token,role:"supervisor",data:loginResult});
        } else {
            return({ status: "error", message: "Invalid credentials" });
        }
    } catch (error) {
        
        return({ status: "error", message: "An error occurred during authentication" });
    }
};

module.exports =  authentificationAsSupervisorController;
