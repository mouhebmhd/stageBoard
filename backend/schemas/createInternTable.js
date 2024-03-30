const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createInternQuery = `
    CREATE TABLE IF NOT EXISTS Interns (
        internId  INT AUTO_INCREMENT PRIMARY KEY,
        internName VARCHAR(255) NOT NULL,
        internFirstName VARCHAR(255) NOT NULL,
        internEmail VARCHAR(255) NOT NULL UNIQUE,
        internPassword VARCHAR(255) NOT NULL,
        internLevel VARCHAR(255) NOT NULL,
        internGender VARCHAR(255) NOT NULL,
        internEstablishment VARCHAR(255) NOT NULL,
        internPhoto VARCHAR(255) NOT NULL,
        internBirthDate VARCHAR(255) NOT NULL,
        internPhone VARCHAR(255) NOT NULL,
        internAccountStatus VARCHAR(255) NOT NULL
    )
`;

const createInternTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();
        
        // Execute the SQL query to create the Interns table
        connection.query(createInternQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Interns table:', error);
                return;
            }
            console.log('Interns table created successfully');
            connection.end();
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = {createInternTable};
