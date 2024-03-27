const internSchema = require("../../../schemas/internSchema");

const deleteInternById = async (id) => {
    try {
        const selectedIntern = await internSchema.findById(id);
        if (!selectedIntern) {
            return { status: 'failed', message: "Intern not found" };
        }
        const deletedIntern = await internSchema.findByIdAndDelete(id);
        if (deletedIntern) {
            return { status: 'success', message: "Intern deleted successfully", deletedIntern };
        } else {
            return { status: 'failed', message: "Intern not found" };
        }
    } catch (error) {
        console.error("Error deleting intern:", error);
        return { status: 'error', message: "An error has occurred when deleting intern" };
    }
};

module.exports = { deleteInternById };
