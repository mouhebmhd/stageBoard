const connectToDatabase = require('../../../database/databaseOperations');

const deleteSupervisorById = async (id) => {
    let connection;
    try {
        // Establish connection to the database
        connection = await connectToDatabase();

        // Prepare SQL query to delete the supervisor by ID
        const deleteQuery = `DELETE FROM Supervisors WHERE supervisorId=${id}`;
        console.log(deleteQuery)
        // Execute the SQL query
         return new Promise((resolve, reject) => {
            connection.query(deleteQuery, (error, results, fields) => {
                // Close the connection
                connection.end();

                // Handle the result of the query
                if (error) {
                    // If there's an error, reject the promise with the error details
                    reject({ status: "failed", message: 'Error deleting supervisor:', error: error });
                } else {
                    // If the deletion is successful, resolve the promise with a success message
                    resolve({ status: "success", message: 'Supervisor deleted successfully' });
                }
            });
        });  
    } catch (error) {
        // If an error occurs during the connection or execution of the query, handle it
        if (connection) {
            connection.end(); // Close the connection if it's open
        }
        throw { status: "failed", message: 'Error connecting to database:', error: error };
    } 
};

module.exports = { deleteSupervisorById };
