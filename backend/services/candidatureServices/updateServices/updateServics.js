const connectToDatabase = require("../../../database/databaseOperations");

const updateCandidatureById = async (candidatureId,updatedCandidature ) => {
 /*   try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to update the candidature by ID
        const updateQuery = `
            UPDATE Candidature 
            SET 
                projectId = ?,
                internId = ?,
                applicationDate = ?,
                applicationStatus = ?
            WHERE 
                id = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(updateQuery, [
                updatedCandidature.projectId, 
                updatedCandidature.internId, 
                updatedCandidature.applicationDate, 
                updatedCandidature.applicationStatus, 
                updatedCandidature.id
            ], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    console.log(error);
                    reject({ status: "failed", message: 'Error updating candidature:', error: error });
                } else {
                    if (results.affectedRows === 0) {
                        resolve({ status: "failed", message: 'Candidature not found' });
                    } else {
                        resolve({ status: "success", message: 'Candidature updated successfully' });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error);
        return { status: "failed", message: 'Error connecting to database:', error: error };
    } */
};

module.exports = { updateCandidatureById };
