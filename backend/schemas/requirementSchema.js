const mongoose = require('mongoose');
const { Schema } = mongoose;
const requirementSchema = new Schema({
  idSkill: { type: String, required: true },
  idIntern: { type: String, required: false },
  idProject: { type: String, required: false },
  levelOfProficiency: { type: String, required: true },
});

const Requirement = mongoose.model('Requirement', skillSchema);

module.exports = Requirement;
