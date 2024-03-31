const connectToDatabase = require('../../../database/databaseOperations');
const bcrypt=require("bcrypt")
const updateService = async (internID, newInternData) => {
    let connection;
     try {
        // Establish connection to the database
        connection = await connectToDatabase();

        // Prepare SQL query to update the intern data
        const updateQuery = `
            UPDATE Interns
            SET internName = ?,
                internFirstName = ?,
                internEmail = ?,
                internPassword = ?,
                internLevel = ?,
                internGender = ?,
                internEstablishment = ?,
                internPhoto = ?,
                internBirthDate = ?,
                internPhone = ?,
                internAccountStatus = ?
            WHERE internId =${internID}
        `;
        // Hash the new password if provided
        let hashedPassword;
        if (newInternData.internPassword) {
            hashedPassword = await bcrypt.hash(newInternData.internPassword, 10);
        }
        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(updateQuery, [
                newInternData.internName,
                newInternData.internFirstName,
                newInternData.internEmail,
                hashedPassword || newInternData.internPassword, // Use the hashed password if provided, otherwise use the plain text password
                newInternData.internLevel,
                newInternData.internGender,
                newInternData.internEstablishment,
                newInternData.internPhoto,
                newInternData.internBirthDate,
                newInternData.internPhone,
                newInternData.internAccountStatus,
            ], (error, results, fields) => {
                console.log(error)
                // Close the connection
                connection.end();

                // Handle the result of the query
                if (error) {
                    console.log(error)

                    // If there's an error, reject the promise with the error details
                    reject({ status: "failed", message: 'Error updating intern:', error: error });
                } else {
                    // If the update is successful, resolve the promise with a success message
                    resolve({ status: "success", message: 'Intern updated successfully' });
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
