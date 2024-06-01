const connectToDatabase = require('../../database/databaseOperations');


const getAllEducationsService = async () => {
    try {
        // Connect to the database
        const connection = await connectToDatabase();

        // Define the SQL query to get all education records
        const query = 'SELECT * FROM Education';

        // Wrap the query in a Promise
        return new Promise((resolve, reject) => {
            connection.query(query, (error, results) => {
                if (error) {
                    console.error('Error getting educations:', error);
                    reject({ status: 'failed', educations: error });
                } else {
                    resolve({ status: 'success', educations: results });
                }
                connection.end();
            });
        });
    } catch (error) {
        console.error('Error connecting to database:', error);
        return { status: 'failed', educations: error };
    }
};

module.exports = { getAllEducationsService };

const postEducationService = async (educationData) => {
    let connection;
    return connectToDatabase()
        .then((conn) => {
            connection = conn;
            const query = `
                INSERT INTO Education 
                    (educationHolderId, educationLevel, educationInstitution, educationStartDate, educationEndDate, educationDiploma, educationDistinction) 
                VALUES 
                    (?, ?, ?, ?, ?, ?, ?)
            `;
            return connection.query(query, [
                educationData.educationHolderId,
                educationData.educationLevel,
                educationData.educationInstitution,
                educationData.educationStartDate,
                educationData.educationEndDate,
                educationData.educationDiploma,
                educationData.educationDistinction
            ]);
        })
        .then(() => ({ status: 'success', message: 'Education record posted successfully' }))
        .catch((error) => {
            console.error('Error posting education:', error);
            return { status: 'failed', message: 'Failed to post education record', error };
        })
        .finally(() => {
            if (connection) {
                return connection.end();
            }
        });
};

const deleteEducationService =async (educationId) => {
    let connection;
    return connectToDatabase()
        .then((conn) => {
            connection = conn;
            const query = 'DELETE FROM Education WHERE educationId = ?';
            return connection.query(query, [educationId]);
        })
        .then(([result]) => {
            if (result.affectedRows === 0) {
                return { status: 'failed', message: 'Education record not found' };
            }
            return { status: 'success', message: 'Education record deleted successfully' };
        })
        .catch((error) => {
            console.error('Error deleting education:', error);
            return { status: 'failed', message: 'Failed to delete education record', error };
        })
        .finally(() => {
            if (connection) {
                return connection.end();
            }
        });
};

const updateEducationService = async (educationId, updatedEducationData) => {
    let connection;
    return connectToDatabase()
        .then((conn) => {
            connection = conn;
            const query = `
                UPDATE Education
                SET 
                    educationHolderId = ?,
                    educationLevel = ?,
                    educationInstitution = ?,
                    educationStartDate = ?,
                    educationEndDate = ?,
                    educationDiploma = ?,
                    educationDistinction = ?
                WHERE 
                    educationId = ?
            `;
            return connection.query(query, [
                updatedEducationData.educationHolderId,
                updatedEducationData.educationLevel,
                updatedEducationData.educationInstitution,
                updatedEducationData.educationStartDate,
                updatedEducationData.educationEndDate,
                updatedEducationData.educationDiploma,
                updatedEducationData.educationDistinction,
                educationId
            ]);
        })
        .then(([result]) => {
            if (result.affectedRows === 0) {
                return { status: 'failed', message: 'Education record not found or no changes were made' };
            }
            return { status: 'success', message: 'Education record updated successfully' };
        })
        .catch((error) => {
            console.error('Error updating education:', error);
            return { status: 'failed', message: 'Failed to update education record', error };
        })
        .finally(() => {
            if (connection) {
                return connection.end();
            }
        });
};

module.exports = { getAllEducationsService, postEducationService, deleteEducationService, updateEducationService };
