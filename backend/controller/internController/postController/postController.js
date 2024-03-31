const { postIntern } = require("../../../services/internServices/postService/postService");

const postController = async (req, res) => {
    try {
        const postResult = await postIntern(req.body);
        res.send(postResult);
    } catch (error) {
        res.status(500).send({ status: "failed", message: "An error occurred", error: error });
    }
}

module.exports = { postController };
