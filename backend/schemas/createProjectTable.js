const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createProjectTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to create the Project table
        const createProjectQuery = `
            CREATE TABLE IF NOT EXISTS Projects (
                projectId INT AUTO_INCREMENT PRIMARY KEY,
                projectName VARCHAR(255) NOT NULL,
                projectDescription TEXT NOT NULL,
                projectDuration INT NOT NULL,
                projectStatus VARCHAR(255) NOT NULL,
                projectProgress INT NOT NULL,
                startDate DATE NOT NULL,
                supervisorId INT NOT NULL,
                internId INT NOT NULL,
                FOREIGN KEY (supervisorId) REFERENCES Supervisors(supervisorId),
                FOREIGN KEY (internId) REFERENCES Interns(internId)
            )
        `;

        // Execute the SQL query to create the Project table
        connection.query(createProjectQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Projects table:', error);
            } else {
                console.log('Projects table created successfully');
            }
            connection.end(); // Close the connection after executing the query
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createProjectTable };
