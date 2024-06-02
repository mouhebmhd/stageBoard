// controllers/messageController.js
const { postMessage } = require("../../../services/messagesServices/postService/postService");

const createMessage = async (req, res) => {
    const messageData = req.body;
    const result = await postMessage(messageData);
    res.send(result);
};

module.exports = { createMessage };
