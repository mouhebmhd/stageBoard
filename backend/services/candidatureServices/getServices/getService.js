const mysql = require('mysql');
const connectToDatabase = require('../../../database/databaseOperations');

const getAllCandidatures = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to get all candidatures with user names through an inner join
        const query = `
        SELECT 
                Candidature.*, 
                Interns.internFirstName, 
                Interns.internName, 
                Projects.projectName,
                Projects.supervisorId
            FROM 
                Candidature
            INNER JOIN 
                Interns ON Candidature.internId = Interns.internId
            INNER JOIN 
                Projects ON Candidature.projectId = Projects.projectId`;

        // Wrap the query in a Promise
        return new Promise((resolve, reject) => {
            connection.query(query, (error, results, fields) => {
                if (error) {
                    console.error('Error getting candidatures:', error);
                    reject({ status: 'failed', candidatures: error });
                } else {
                    resolve({ status: 'success', candidatures: results });
                    // You can process the results here
                }
                connection.end();
            });
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
        return { status: 'failed', candidatures: error };
    }
};

module.exports = { getAllCandidatures };
