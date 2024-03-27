const mongoose = require('mongoose');
const { Schema } = mongoose;

const skillSchema = new Schema({
  skillName: { type: String, required: true },
  skillDescription: { type: String, required: true },
});

const Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;
