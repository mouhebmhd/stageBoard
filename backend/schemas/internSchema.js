const mongoose=require("mongoose")
const {Schema} = mongoose;
const schema= new Schema({
    internName:{
    type: String,
    required: true,
    unique: false
    },
    internFirstName:{
    type: String,
    required: true,
    },
    internEmail:{
    type: String,
    required: true,
    },
    internPassword:{
        type: String,
    required: true,
    },
    internLevel:{
    type: String,
    required: true,
    },
    internGender:{
        type: String,
    required: true,
    },
    internEstablishment:{
        type: String,
    required: true,
    },
    internPhoto:{
        type: String,
    required: true,
    },
    internBirthDate:{
        type: String,
    required: true,
    },
    internPhone:{
        type: String,
    required: true,
    },
    internAccountStatus:{
        type: String,
    required: true,
    },
})
const Intern=mongoose.model("intern",schema);
module.exports=Intern;