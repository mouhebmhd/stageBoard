const mysql = require('mysql');
const connectToDatabase = require("../../../database/databaseOperations");

const postCandidature = async (projectId, internId) => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Set default values
        const applicationStatus = 'en attente';
        const applicationDate = new Date().toISOString().split('T')[0]; // Get the current date in YYYY-MM-DD format

        // Define the SQL query to insert a new candidature
        const query = `
            INSERT INTO Candidature (projectId, internId, applicationDate, applicationStatus) 
            VALUES (?, ?, ?, ?)`;

        // Execute the SQL query with the provided data
        connection.query(query, [projectId, internId, applicationDate, applicationStatus], (error, results, fields) => {
            if (error) {
                console.error('Error posting candidature:', error);
                return { status: "failed", message: "An error occurred while posting candidature", error: error };
            } else {
                console.log('Candidature posted successfully');
                return { status: "success", message: "Candidature posted successfully", candidatureId: results.insertId };
            }
            connection.end();
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
        return { status: "failed", message: "An error occurred while connecting to database", error: error };
    }
};

module.exports = { postCandidature };
