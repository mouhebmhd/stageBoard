const bcrypt = require("bcrypt");
const connectToDatabase = require("../../../database/databaseOperations");

const postIntern = async (newIntern) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(newIntern.internPassword, 10);

        // Prepare SQL query to insert the intern
        const insertQuery = `
            INSERT INTO Interns 
                (internName, internFirstName, internEmail, internPassword, internLevel, internGender, internEstablishment, internPhoto, internBirthDate, internPhone, internAccountStatus) 
            VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(insertQuery, [newIntern.internName, newIntern.internFirstName, newIntern.internEmail, hashedPassword, newIntern.internLevel, newIntern.internGender, newIntern.internEstablishment, newIntern.internPhoto, newIntern.internBirthDate, newIntern.internPhone, newIntern.internAccountStatus], (error, results, fields) => {
                connection.end(); // Close the connection

                if (error) {
                    reject({ status: "failed", message: 'Error inserting intern:', error: error });
                } else {
                    resolve({ status: "success", message: 'Intern inserted successfully' });
                }
            });
        });
    } catch (error) {
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { postIntern };
