const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createSkillTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to create the Skill table
        const createSkillQuery = `
            CREATE TABLE IF NOT EXISTS Skills (
                skillId INT AUTO_INCREMENT PRIMARY KEY,
                skillName VARCHAR(255) NOT NULL,
                skillDescription TEXT NOT NULL,
                skillHolderId VARCHAR(255) NOT NULL
            )
        `;

        // Execute the SQL query to create the Skill table
        connection.query(createSkillQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Skills table:', error);
            } else {
                console.log('Skills table created successfully');
            }
            connection.end(); // Close the connection after executing the query
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createSkillTable };
