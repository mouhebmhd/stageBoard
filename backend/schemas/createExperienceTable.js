const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createExperienceTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to create the Experience table with a foreign key constraint
        const createExperienceQuery = `
            CREATE TABLE IF NOT EXISTS Experience (
                id INT AUTO_INCREMENT PRIMARY KEY,
                experienceHolderId VARCHAR(255) NOT NULL,
                experienceCompany VARCHAR(255) NOT NULL,
                experienceStartDate DATE NOT NULL,
                experienceEndDate DATE NOT NULL,
                experienceMission VARCHAR(255) NOT NULL,
                experienceDescription VARCHAR(255) NOT NULL
            )`;
        // Execute the SQL query to create the Experience table
        connection.query(createExperienceQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Experience table:', error);
            } else {
                console.log('Experience table created successfully');
            }
            connection.end();
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createExperienceTable };
