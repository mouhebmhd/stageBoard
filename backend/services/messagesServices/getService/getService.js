const connectToDatabase = require("../../../database/databaseOperations");

const getMessageById = async (messageId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select the message by ID
        const selectQuery = `
            SELECT * FROM Messages WHERE messageId = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [messageId], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error retrieving message:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'Message not found' });
                    } else {
                        resolve({ status: "success", message: results[0] });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

const getMessagesByInternId = async (internId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select messages by intern ID
        const selectQuery = `
            SELECT * FROM Messages WHERE internId = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [internId], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error retrieving messages:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'No messages found for this intern' });
                    } else {
                        resolve({ status: "success", messages: results });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

const getMessagesBySupervisorId = async (supervisorId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select messages by supervisor ID
        const selectQuery = `
            SELECT * FROM Messages WHERE supervisorId = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [supervisorId], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error retrieving messages:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'No messages found for this supervisor' });
                    } else {
                        resolve({ status: "success", messages: results });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

const getAllMessages = async () => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select all messages
        const selectQuery = `
            SELECT * FROM Messages
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error retrieving messages:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'No messages found' });
                    } else {
                        resolve({ status: "success", messages: results });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { getMessageById, getMessagesByInternId, getMessagesBySupervisorId, getAllMessages };
