const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createMessageTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to create the Message table with foreign key constraints
        const createMessageQuery = `
        CREATE TABLE IF NOT EXISTS Messages (
            messageId INT AUTO_INCREMENT PRIMARY KEY,
            messageSubject VARCHAR(255) NOT NULL,
            messageBody TEXT NOT NULL,
            messageDate DATETIME NOT NULL,
            isReadBySender BOOLEAN DEFAULT FALSE,
            isReadByRecipient BOOLEAN DEFAULT FALSE,
            internId INT NOT NULL,
            supervisorId INT NOT NULL,
            FOREIGN KEY (internId) REFERENCES Interns(internId),
            FOREIGN KEY (supervisorId) REFERENCES Supervisors(supervisorId)
        );
        `;

        // Execute the SQL query to create the Message table
        connection.query(createMessageQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Messages table:', error);
            } else {
                console.log('Messages table created successfully');
            }
            connection.end();
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createMessageTable };
