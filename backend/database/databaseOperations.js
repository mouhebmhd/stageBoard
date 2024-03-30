const mysql = require("mysql");

const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        const config = {
            host: "localhost",
            user: "root",
            password: "", // Provide your MySQL password here
            database: "stageBoard"
        };

        const connection = mysql.createConnection(config);

        connection.connect((err) => {
            if (err) {
                console.error("Error connecting to database:", err);
                reject(err);
                return;
            }
            console.log("Connected to database successfully!");
            resolve(connection);
        });
    });
};

module.exports = connectToDatabase;
