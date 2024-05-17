const connectToDatabase = require("../../../database/databaseOperations");

const postProject = async (newProject) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to insert the project
        const insertQuery = `
            INSERT INTO Projects 
                (projectName, projectDescription, projectDuration, projectStatus, projectProgress, projectDomain,startDate, supervisorId, internId) 
            VALUES 
                (?, ?, ?, ?, ?, ?, ?,?, ?)
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(insertQuery, [newProject.projectName, newProject.projectDescription, newProject.projectDuration, newProject.projectStatus, newProject.projectProgress,newProject.projectDomain, newProject.startDate, newProject.supervisorId, newProject.internId], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error inserting project:', error: error });
                } else {
                    resolve({ status: "success", message: 'Project inserted successfully' });
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { postProject };
