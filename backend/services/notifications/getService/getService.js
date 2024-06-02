const connectToDatabase = require("../../../database/databaseOperations");

const getNotificationById = async (notificationId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select the notification by ID
        const selectQuery = `
            SELECT * FROM Notifications WHERE notificationId = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [notificationId], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    reject({ status: "failed", message: 'Error retrieving notification:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'Notification not found' });
                    } else {
                        resolve({ status: "success", notification: results[0] });
                    }
                }
            });
        });
    } catch (error) {
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

const getNotificationsByInternId = async (internId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select notifications by intern ID
        const selectQuery = `
            SELECT * FROM Notifications WHERE idRecipient = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [internId], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    reject({ status: "failed", message: 'Error retrieving notifications:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'No notifications found for this intern' });
                    } else {
                        resolve({ status: "success", notifications: results });
                    }
                }
            });
        });
    } catch (error) {
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

const getNotificationsBySupervisorId = async (supervisorId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select notifications by supervisor ID
        const selectQuery = `
            SELECT * FROM Notifications WHERE idRecipient = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [supervisorId], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    reject({ status: "failed", message: 'Error retrieving notifications:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'No notifications found for this supervisor' });
                    } else {
                        resolve({ status: "success", notifications: results });
                    }
                }
            });
        });
    } catch (error) {
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

const getAllNotifications = async () => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select all notifications
        const selectQuery = `
            SELECT * FROM Notifications
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    reject({ status: "failed", message: 'Error retrieving notifications:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'No notifications found' });
                    } else {
                        resolve({ status: "success", notifications: results });
                    }
                }
            });
        });
    } catch (error) {
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { getNotificationById, getNotificationsByInternId, getNotificationsBySupervisorId, getAllNotifications };
