const connectToDatabase = require("../../../database/databaseOperations");

const getProjectById = async (projectId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select the project by ID
        const selectQuery = `
            SELECT * FROM Projects WHERE projectId = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [projectId], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error retrieving project:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'Project not found' });
                    } else {
                        resolve({ status: "success", project: results[0] });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};
const getProjectByInternId = async (internId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select the project by ID
        const selectQuery = `
            SELECT * FROM Projects WHERE internId = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [internId], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error retrieving project:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'Project not found for this intern' });
                    } else {
                        resolve({ status: "success", projects: results });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};
const getProjectBySupervisorId = async (supervisorId) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select the project by ID
        const selectQuery = `
            SELECT * FROM Projects WHERE supervisorId = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [supervisorId], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error retrieving project:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'Project not found for this supervisor' });
                    } else {
                        resolve({ status: "success", projects: results});
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};
const getProjects = async () => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to select the project by ID
        const selectQuery = `
            SELECT * FROM Projects
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(selectQuery, [], (error, results, fields) => {
                connection.end(); // Close the connection
                console.log(results)
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error retrieving project:', error: error });
                } else {
                    if (results.length === 0) {
                        resolve({ status: "failed", message: 'Projects not found' });
                    } else {
                        resolve({ status: "success", projects: results });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};
module.exports = { getProjectById,getProjectByInternId,getProjectBySupervisorId,getProjects };
