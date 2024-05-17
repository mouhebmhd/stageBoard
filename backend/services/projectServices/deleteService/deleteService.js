const connectToDatabase = require("../../../database/databaseOperations");

const deleteProjectById = async (projectId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to delete the project by ID
        const deleteQuery = `
            DELETE FROM Projects WHERE projectId = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(deleteQuery, [projectId], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error deleting project:', error: error });
                } else {
                    if (results.affectedRows === 0) {
                        resolve({ status: "failed", message: 'Project not found' });
                    } else {
                        resolve({ status: "success", message: 'Project deleted successfully' });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { deleteProjectById };
