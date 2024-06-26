const connectToDatabase = require('../../../database/databaseOperations');

// Function to get all interns
const getAllSupervisors = async () => {
    let connection;
    try {
        // Establish connection to the database
        connection = await connectToDatabase();

        // Prepare SQL query to select all interns
        const selectQuery = `SELECT * FROM Supervisors`;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, (error, results, fields) => {
                // Close the connection
                connection.end();

                // Handle the result of the query
                if (error) {
                    // If there's an error, reject the promise with the error details
                    reject({ status: "failed", message: 'Error fetching interns:', error: error });
                } else {
                    // If the selection is successful, resolve the promise with the fetched interns
                    resolve({ status: "success", supervisors: results });
                }
            });
        });
    } catch (error) {
        // If an error occurs during the connection or execution of the query, handle it
        if (connection) {
            connection.end(); // Close the connection if it's open
        }
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

// Function to get intern by ID
const getSupervisorById = async (id) => {
    let connection;
    try {
        // Establish connection to the database
        connection = await connectToDatabase();

        // Prepare SQL query to select intern by ID
        const selectQuery = `SELECT * FROM Supervisors WHERE supervisorId = ${id}`;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, (error, results, fields) => {
                // Close the connection
                connection.end();

                // Handle the result of the query
                if (error) {
                    // If there's an error, reject the promise with the error details
                    reject({ status: "failed", message: 'Error fetching supervisor  by ID:', error: error });
                } else {
                    // If the selection is successful, resolve the promise with the fetched intern
                    resolve({ status: "success", supervisor: results[0] });
                }
            });
        });
    } catch (error) {
        // If an error occurs during the connection or execution of the query, handle it
        if (connection) {
            connection.end(); // Close the connection if it's open
        }
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { getAllSupervisors, getSupervisorById };
