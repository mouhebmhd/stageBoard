const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createEducationTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to create the Education table
        const createEducationQuery = `
            CREATE TABLE IF NOT EXISTS Education (
                educationId INT AUTO_INCREMENT PRIMARY KEY,
                educationHolderId VARCHAR(255) NOT NULL,
                educationLevel VARCHAR(255) NOT NULL,
                educationInstitution VARCHAR(255) NOT NULL,
                educationStartDate DATE NOT NULL,
                educationEndDate DATE NOT NULL,
                educationDiploma VARCHAR(255) NOT NULL,
                educationDistinction VARCHAR(255) NOT NULL
                FOREIGN KEY (educationHolderId) REFERENCES Interns(internId)
            )
        `;

        // Execute the SQL query to create the Education table
        connection.query(createEducationQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Education table:', error);
            } else {
                console.log('Education table created successfully');
            }
            connection.end();
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createEducationTable };
