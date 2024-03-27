const internSchema = require("../../../schemas/internSchema");
const bcrypt = require("bcrypt");

const postIntern = async (newIntern) => {
    try {
        const hashedPassword = await bcrypt.hash(newIntern.internPassword, 10);
        const newInternRecord = new internSchema({
            internName: newIntern.internName,
            internFirstName: newIntern.internFirstName,
            internEmail: newIntern.internEmail,
            internPassword: hashedPassword,
            internLevel: newIntern.internLevel,
            internGender: newIntern.internGender,
            internEstablishment: newIntern.internEstablishment,
            internPhoto: newIntern.internPhoto,
            internBirthDate: newIntern.internBirthDate,
            internPhone: newIntern.internPhone,
            internAccountStatus: "waiting",
        });
        const newInternSaved = await newInternRecord.save();
        if (newInternSaved) {
            return { status: "success", message: "Your account has been created, waiting for admin validation", newInternSaved };
        } else {
            return { status: "failed", message: "An error has occurred while trying to create your account. Please try again." };
        }
    } catch (error) {
        return { status: "error", message: "An error has occurred while trying to create your account. Please try again." };
    }
};

module.exports = { postIntern };
