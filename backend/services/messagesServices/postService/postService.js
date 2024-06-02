// services/messageService/postService.js
const connectToDatabase = require("../../../database/databaseOperations");

const postMessage = async (messageData) => {
    const { messageSubject, messageBody, messageDate, isReadBySender, isReadByRecipient, internId, supervisorId } = messageData;

    try {
        // Establish connection to the database
        const connection = await connectToDatabase();

        // Prepare SQL query to insert a new message
        const insertQuery = `
            INSERT INTO Messages (messageSubject, messageBody, messageDate, isReadBySender, isReadByRecipient, internId, supervisorId)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(insertQuery, [messageSubject, messageBody, messageDate, isReadBySender, isReadByRecipient, internId, supervisorId], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    reject({ status: "failed", message: 'Error posting message:', error: error });
                } else {
                    resolve({ status: "success", message: 'Message posted successfully', messageId: results.insertId });
                }
            });
        });
    } catch (error) {
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { postMessage };
