const { loginAsInternService } = require("../../services/authentification/loginAsInternService");
const { createToken } = require("../../services/authentification/createTokenService");

const authentificationAsInternController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const loginResult = await loginAsInternService(email,password);
        
        if (loginResult && loginResult.status === "success") {
            // Create token if login is successful
            const token = createToken(loginResult, process.env.SECRET_KEY,180);

            // Attach the token to a cookie
            res.cookie("token", token, { httpOnly: true });
            res.status(200).json({ status: "success", message: "Login successful" });
        } else {
            res.status(401).json({ status: "error", message: "Invalid credentials" });
        }
    } catch (error) {
        console.error("Error in authenticationController:", error);
        res.status(500).json({ status: "error", message: "An error occurred during authentication" });
    }
};

module.exports = { authentificationAsInternController };
