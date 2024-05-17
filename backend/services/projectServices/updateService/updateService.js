const connectToDatabase = require("../../../database/databaseOperations");

const updateProjectById = async (projectId, updatedProject) => {
    try {
        // Establish connection to the database
        const connection = await connectToDatabase();
        
        // Prepare SQL query to update the project by ID
        const updateQuery = `
            UPDATE Projects 
            SET 
                projectName = ?,
                projectDescription = ?,
                projectDuration = ?,
                projectStatus = ?,
                projectProgress = ?,
                projectDomain = ?,
                startDate = ?,
                supervisorId = ?,
                internId = ?
            WHERE 
                projectId = ?
        `;

        // Execute the SQL query
        return new Promise((resolve, reject) => {
            connection.query(updateQuery, [updatedProject.projectName, updatedProject.projectDescription, updatedProject.projectDuration, updatedProject.projectStatus, updatedProject.projectProgress, updatedProject.projectDomain,updatedProject.startDate, updatedProject.supervisorId, updatedProject.internId, projectId], (error, results, fields) => {
                connection.end(); // Close the connection
                if (error) {
                    console.log(error)
                    reject({ status: "failed", message: 'Error updating project:', error: error });
                } else {
                    if (results.affectedRows === 0) {
                        resolve({ status: "failed", message: 'Project not found' });
                    } else {
                        resolve({ status: "success", message: 'Project updated successfully' });
                    }
                }
            });
        });
    } catch (error) {
        console.log(error)
        return { status: "failed", message: 'Error connecting to database:', error: error };
    }
};

module.exports = { updateProjectById };
