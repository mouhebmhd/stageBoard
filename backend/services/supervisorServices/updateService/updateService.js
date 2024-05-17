const connectToDatabase = require('../../../database/databaseOperations');
const bcrypt=require("bcrypt")
const updateService = async (newSupervisorData) => {
    let connection;
     try {
        // Establish connection to the database
        connection = await connectToDatabase();

        // Prepare SQL query to update the supervisor data
        const updateQuery = `
            UPDATE Supervisors
            SET supervisorName = ?,
                supervisorFirstName = ?,
                supervisorEmail = ?,
                supervisorPassword = ?,
                supervisorLevel = ?,
                supervisorGender = ?,
                supervisorEstablishment = ?,
                supervisorPhoto = ?,
                supervisorBirthDate = ?,
                supervisorPhone = ?,
                AccountStatus = ?
            WHERE supervisorId =${newSupervisorData.supervisorId}
        `;
        // Hash the new password if provided
        let hashedPassword;
        if (newSupervisorData.supervisorPassword) {
            hashedPassword = await bcrypt.hash(newSupervisorData.supervisorPassword, 10);
        }
        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(updateQuery, [
                newSupervisorData.supervisorName,
                newSupervisorData.supervisorFirstName,
                newSupervisorData.supervisorEmail,
                hashedPassword || newSupervisorData.supervisorPassword, // Use the hashed password if provided, otherwise use the plain text password
                newSupervisorData.supervisorLevel,
                newSupervisorData.supervisorGender,
                newSupervisorData.supervisorEstablishment,
                newSupervisorData.supervisorPhoto,
                newSupervisorData.supervisorBirthDate,
                newSupervisorData.supervisorPhone,
                newSupervisorData.supervisorAccountStatus,
            ], (error, results, fields) => {
                console.log(error)
                // Close the connection
                connection.end();

                // Handle the result of the query
                if (error) {
                    console.log(error)

                    // If there's an error, reject the promise with the error details
                    reject({ status: "failed", message: 'Error updating supervisor:', error: error });
                } else {
                    // If the update is successful, resolve the promise with a success message
                    resolve({ status: "success", message: 'Supervisor updated successfully' });
                }
            });
        });
    } catch (error) {
        console.log(error)

        console.error('Error connecting to database:', error);
        if (connection) {
            connection.end(); // Close the connection if it's open
        }
        return { status: "failed", message: 'Error connecting to database:', error };
    }
};

module.exports = { updateService };
