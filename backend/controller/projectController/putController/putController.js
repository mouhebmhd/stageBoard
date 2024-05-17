const { updateProjectById } = require("../../../services/projectServices/updateService/updateService");

const putController = async (req, res) => {
    try {
        const putResult = await updateProjectById(req.body.projectId,req.body.project);
        res.send(putResult);
    } catch (error) {
        res.status(500).send({ status: "failed", message: "An error occurred", error: error });
    }
}

module.exports = { putController };
