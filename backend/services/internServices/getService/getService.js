const connectToDatabase = require('../../../database/databaseOperations');

// Function to get all interns
const getAllInterns = async () => {
    let connection;
    try {
        // Establish connection to the database
        connection = await connectToDatabase();

        // Prepare SQL query to select all interns
        const selectQuery = `SELECT * FROM Interns`;

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
                    resolve({ status: "success", interns: results });
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
const getInternById = async (id) => {
    let connection;
    try {
        // Establish connection to the database
        connection = await connectToDatabase();

        // Prepare SQL query to select intern by ID
        const selectQuery = `SELECT * FROM Interns WHERE internId = ${id}`;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, (error, results, fields) => {
                // Close the connection
                connection.end();

                // Handle the result of the query
                if (error) {
                    // If there's an error, reject the promise with the error details
                    reject({ status: "failed", message: 'Error fetching intern by ID:', error: error });
                } else {
                    // If the selection is successful, resolve the promise with the fetched intern
                    resolve({ status: "success", intern: results[0] });
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

module.exports = { getAllInterns, getInternById };
