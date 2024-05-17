const { postCandidature } = require("../../../services/candidatureServices/postServices/postService");

const postController = async (req, res) => {
    console.log(req.body)
    try {
        const postResult = await postCandidature(req.body.projectId,req.body.internId);
        res.send(postResult);
    } catch (error) {
        res.status(500).send({ status: "failed", message: "An error occurred", error: error });
    } 
}

module.exports = { postController };
