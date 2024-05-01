const bcrypt = require("bcrypt");
const connectToDatabase = require("../../../database/databaseOperations");

const postIntern = async (newIntern) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(newIntern.Password, 10);

        // Prepare SQL query to insert the intern
        const insertQuery = `
            INSERT INTO Interns 
                (internName, internFirstName, internEmail, internPassword, internLevel, internGender, internEstablishment, internPhoto, internBirthDate, internPhone, internAccountStatus) 
            VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(insertQuery, [newIntern.Name, newIntern.FirstName, newIntern.Email, hashedPassword, newIntern.Level, newIntern.Gender, newIntern.Establishment,'null', newIntern.BirthDate, newIntern.Phone, 'frozen'], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error inserting intern:', error: error });
                } else {
                    resolve({ status: "success", message: 'Intern inserted successfully' });
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { postIntern };
