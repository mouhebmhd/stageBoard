const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  IdProjet: { type: Number, required: true, unique: true },
  projectName: { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectDuration: { type: Number, required: true },
  projectStatus: { type: String, required: true },
  projectProgress: { type: Number, required: true },
  startDate: { type: Date, required: true },
  idSupervisor:{type:String,required:true},
  idIntern:{type:String,required:true},
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
