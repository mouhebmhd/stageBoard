const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createCandidatureTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to create the Candidature table with foreign key constraints
        const createCandidatureQuery = `
            CREATE TABLE IF NOT EXISTS Candidature (
                id INT AUTO_INCREMENT PRIMARY KEY,
                projectId INT NOT NULL,
                internId INT NOT NULL,
                applicationDate DATE NOT NULL,
                applicationStatus VARCHAR(255) NOT NULL,
                FOREIGN KEY (projectId) REFERENCES Projects(projectId),
                FOREIGN KEY (internId) REFERENCES Interns(internId)
            )`;
        
        // Execute the SQL query to create the Candidature table
        connection.query(createCandidatureQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Candidature table:', error);
            } else {
                console.log('Candidature table created successfully');
            }
            connection.end();
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createCandidatureTable };
