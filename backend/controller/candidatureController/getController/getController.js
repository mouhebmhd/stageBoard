const { getAllCandidatures } = require("../../../services/candidatureServices/getServices/getService");

const getController = async (req, res) => {
    
    try {
        const getResult = await getAllCandidatures();
        res.send(getResult);
    } catch (error) {
        res.status(500).send({ status: "failed", message: "An error occurred", error: error });
    } 
}

module.exports = { getController };
