const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createSupervisorTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to create the Supervisor table
        const createSupervisorQuery = `
            CREATE TABLE IF NOT EXISTS Supervisors (
                supervisorId INT AUTO_INCREMENT PRIMARY KEY,
                supervisorName VARCHAR(255) NOT NULL,
                supervisorFirstName VARCHAR(255) NOT NULL,
                supervisorEmail VARCHAR(255) NOT NULL UNIQUE,
                supervisorPassword VARCHAR(255) NOT NULL,
                supervisorLevel VARCHAR(255) NOT NULL,
                supervisorGender VARCHAR(255) NOT NULL,
                supervisorEstablishment VARCHAR(255) NOT NULL,
                supervisorPhoto VARCHAR(255) NOT NULL,
                supervisorBirthDate DATE NOT NULL,
                supervisorPhone VARCHAR(255) NOT NULL
            )
        `;

        // Execute the SQL query to create the Supervisor table
        connection.query(createSupervisorQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Supervisors table:', error);
            } else {
                console.log('Supervisors table created successfully');
            }
            connection.end();
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createSupervisorTable };
