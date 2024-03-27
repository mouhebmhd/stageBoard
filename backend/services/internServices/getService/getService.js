const internSchema = require("../../../schemas/internSchema");

// Function to get all interns
const getAllInterns = async () => {
    try {
        const interns = await internSchema.find({});
        if (interns.length > 0) {
            return { status: "success", users: interns };
        } else {
            return { status: "failed", message: "no interns found", users: [] };
        }
    } catch (error) {
        return { status: "failed", message: "an error has occurred", error: error };
    }
};

// Function to get intern by ID
const getInternById = async (id) => {
    try {
        const intern = await internSchema.findById(id,{internPassword:0});
        if (intern) {
            return { status: "success", intern };
        } else {
            return { status: "failed", message: "no user found with the given id" };
        }
    } catch (error) {
        return { status: "error", message: "an error has occurred", error };
    }
};

module.exports = { getAllInterns, getInternById };

