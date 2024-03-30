const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createRequirementTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to create the Requirement table
        const createRequirementQuery = `
        CREATE TABLE IF NOT EXISTS Requirements (
            idRequirement INT PRIMARY KEY,
            internId INT NOT NULL,
            projectId INT NOT NULL,
            levelOfProficiency VARCHAR(255) NOT NULL,
            skillId INT,
            FOREIGN KEY (internId) REFERENCES Interns(internId),
            FOREIGN KEY (projectId) REFERENCES Projects(projectId),
            FOREIGN KEY (skillId) REFERENCES Skills(skillId)
        )
        
        `;

        // Execute the SQL query to create the Requirement table
        connection.query(createRequirementQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Requirements table:', error);
            } else {
                console.log('Requirements table created successfully');
            }
            connection.end(); // Close the connection after executing the query
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createRequirementTable };
