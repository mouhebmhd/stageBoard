const mongoose =require("mongoose")
const Schema=mongoose.Schema;
const schema=new Schema({
    supervisorName:{
        type: String,
        required: true,
        unique: false
        },
        supervisorFirstName:{
        type: String,
        required: true,
        },
        supervisorEmail:{
        type: String,
        required: true,
        },
        supervisorPassword:{
            type: String,
        required: true,
        },
        supervisorLevel:{
        type: String,
        required: true,
        },
        supervisorGender:{
            type: String,
        required: true,
        },
        supervisorEstablishment:{
            type: String,
        required: true,
        },
        supervisorPhoto:{
            type: String,
        required: true,
        },
        supervisorBirthDate:{
            type: String,
        required: true,
        },
        supervisorPhone:{
            type: String,
        required: true,
        },
})
const supervisorSchema=mongoose.model("Supervisor",schema);
module.exports=supervisorSchema;