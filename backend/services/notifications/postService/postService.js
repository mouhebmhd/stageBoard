// services/notificationService/postService.js
const connectToDatabase = require("../../../database/databaseOperations");

const postNotification = async (notificationData) => {
    const { notificationMessage, notificationDate, idRecipient } = notificationData;

    try {
        // Establish connection to the database
        const connection = await connectToDatabase();

        // Prepare SQL query to insert a new notification
        const insertQuery = `
            INSERT INTO Notifications (notificationMessage, notificationDate, idRecipient)
            VALUES (?, ?, ?)
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(insertQuery, [notificationMessage, notificationDate, idRecipient], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    reject({ status: "failed", message: 'Error posting notification:', error: error });
                } else {
                    resolve({ status: "success", message: 'Notification posted successfully', notificationId: results.insertId });
                }
            });
        });
    } catch (error) {
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { postNotification };
