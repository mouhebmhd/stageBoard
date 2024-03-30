const mysql = require('mysql');
const connectToDatabase = require('../database/databaseOperations');

const createAdminQuery = `
    CREATE TABLE IF NOT EXISTS Admins (
        adminId INT AUTO_INCREMENT PRIMARY KEY,
        nomAdmin VARCHAR(255) NOT NULL,
        prenomAdmin VARCHAR(255) NOT NULL,
        emailAdmin VARCHAR(255) NOT NULL UNIQUE,
        passwordAdmin VARCHAR(255) NOT NULL,
        genreAdmin VARCHAR(255) NOT NULL,
        photoAdmin VARCHAR(255)
    )
`;

const createAdminTable = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();
        
        // Execute the SQL query to create the Admins table
        connection.query(createAdminQuery, (error, results, fields) => {
            if (error) {
                console.error('Error creating Admins table:', error);
                return;
            }
            console.log('Admins table created successfully');
            connection.end();
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
    }
};

module.exports = { createAdminTable };
