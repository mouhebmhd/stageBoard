const { getAllNotifications} = require("../../../services/notifications/getService/getService");

const getController = async (req, res) => {
    try {
        const postResult = await getAllNotifications(req.body);
        res.send(postResult);
    } catch (error) {
        res.status(500).send({ status: "failed", message: "An error occurred", error: error });
    }
}

module.exports = { getController };
