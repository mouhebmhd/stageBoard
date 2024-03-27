const internSchema = require("../../../schemas/internSchema");

const updateService = async (internID, newInternData) => {
    try {
        const intern = await internSchema.findById(internID);
        if (!intern) {
            return { status: "failed", message: "No intern with the given ID." };
        } else {
            const updatedIntern = { ...intern.toObject(), ...newInternData }; // Use toObject() to convert Mongoose document to plain object
            const updateResult = await internSchema.findByIdAndUpdate(internID, updatedIntern);
            if (updateResult) {
                return { status: "success", message: "Intern account updated successfully." };
            } else {
                return { status: "failed", message: "An error occurred while updating the intern account." };
            }
        }
    } catch (error) {
        return { status: "error", message: "An error occurred while updating the intern account." };
    }
};

module.exports = { updateService };
