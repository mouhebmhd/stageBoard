const { postSupervisor} = require("../../../services/supervisorServices/postServices/postSupervisor");

const postController = async (req, res) => {
    try {
        const postResult = await postSupervisor(req.body);
        res.send(postResult);
    } catch (error) {
        res.status(500).send({ status: "failed", message: "An error occurred", error: error });
    }
}

module.exports = { postController };
