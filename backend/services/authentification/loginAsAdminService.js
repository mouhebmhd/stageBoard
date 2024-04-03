const bcrypt = require("bcrypt");
const connectToDatabase = require("../../database/databaseOperations");

async function loginAsAdminService(email, password, role) {
    let connection;

    try {
        // Connect to the database
        connection = await connectToDatabase();

        // Query to select the user with the given email
        const searchQuery = `SELECT * FROM Admins WHERE adminEmail ='${email}'`;
        
        return new Promise((resolve, reject) => {
            connection.query(searchQuery, async (error, result, fields) => {
                if (error) {
                    reject(error);
                } else {
                    if (result.length === 0) {
                        resolve({status:"failed",message:"account not found "}); // No user found with the given email
                    } else {
                        const user = result[0];
                        // Compare the provided password with the hashed password stored in the database
                        const passwordMatch = await bcrypt.compare(password, user.internPassword);
                        if (passwordMatch) {
                            resolve({status:"success",message:"account  found  "}); // Passwords match, return the user
                        } else {
                            resolve({status:"failed",message:"password incorrect "}); // Incorrect password
                        }
                    }
                }
            });
        });

    } catch (error) {
        // Return null in case of any error
        console.error("Error in loginService:", error);
        return null;
    } finally {
        if (connection) {
            // Close the database connection
            connection.end();
        }
    }
}

module.exports = { loginService };
