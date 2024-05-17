const bcrypt = require("bcrypt");
const connectToDatabase = require("../../../database/databaseOperations");

const postSupervisor = async (newSupervisor) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Hash the password
        const hashedPassword = await bcrypt.hash(newSupervisor.supervisorPassword, 10);

        // Prepare SQL query to insert the supervisor
        const insertQuery = `
            INSERT INTO Supervisors 
                (supervisorName, supervisorFirstName, supervisorEmail, supervisorPassword, supervisorLevel, supervisorGender, supervisorEstablishment, supervisorPhoto, supervisorBirthDate, supervisorPhone) 
            VALUES 
                (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
           
        // Execute the SQL query
         return new Promise((resolve, reject) => {
            connection.query(insertQuery, [newSupervisor.supervisorName, newSupervisor.supervisorFirstName, newSupervisor.supervisorEmail, hashedPassword, newSupervisor.supervisorLevel, newSupervisor.supervisorGender, newSupervisor.supervisorEstablishment, newSupervisor.supervisorPhoto, newSupervisor.supervisorBirthDate, newSupervisor.supervisorPhone], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    console.error(error);
                    reject({ status: "failed", message: 'Error inserting supervisor:', error: error });
                } else {
                    resolve({ status: "success", message: 'Supervisor inserted successfully' });
                }
            });
        }); 
    } catch (error) {
        console.error(error);
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { postSupervisor };
