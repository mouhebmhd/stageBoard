const { loginAsAdminService } = require("../../services/authentification/loginAsAdminService");
const { createToken } = require("../../services/authentification/createTokenService");

const authentificationAsAdminController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginResult = await loginAsAdminService(email,password);
        
        if (loginResult && loginResult.status === "success") {
            // Create token if login is successful
            const token = createToken(loginResult, process.env.SECRET_KEY,180);
 
            // Attach the token to a cookie
            res.cookie("token", token, { httpOnly: true });
            res.status(200).json({ status: "success", message: "Login successful",token});
        } else {
            res.status(401).json({ status: "error", message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Error in authenticationController:", error);
        res.status(500).json({ status: "error", message: "An error occurred during authentication" });
    }
};

module.exports =  authentificationAsAdminController;
