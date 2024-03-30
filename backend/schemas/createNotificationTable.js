const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createNotificationTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to create the Notifications table
        const createNotificationQuery = `
            CREATE TABLE IF NOT EXISTS Notifications (
                notificationId INT AUTO_INCREMENT PRIMARY KEY,
                notificationMessage VARCHAR(255) NOT NULL,
                notificationDate DATE NOT NULL,
                idRecipient BOOLEAN DEFAULT FALSE
            )
        `;

        // Execute the SQL query to create the Notifications table
        connection.query(createNotificationQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Notifications table:', error);
            } else {
                console.log('Notifications table created successfully');
            }
            connection.end(); // Close the connection after executing the query
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createNotificationTable };
