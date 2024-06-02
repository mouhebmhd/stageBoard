// controllers/messageController.js
const { getMessageById, getMessagesByInternId, getMessagesBySupervisorId, getAllMessages } = require("../../../services/messagesServices/getService/getService");

const getMessage = async (req, res) => {
    const result = await getMessageById(req.query.id);
    res.send(result);
};

const getMessagesByIntern = async (req, res) => {
    const result = await getMessagesByInternId(req.query.internId);
    res.send(result);
};

const getMessagesBySupervisor = async (req, res) => {
    const result = await getMessagesBySupervisorId(req.query.supervisorId);
    res.send(result);
};

const getMessages = async (req, res) => {
    const result = await getAllMessages();
    res.send(result);
};

module.exports = { getMessage, getMessagesByIntern, getMessagesBySupervisor, getMessages };
