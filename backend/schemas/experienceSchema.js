const mongoose = require('mongoose');
const { Schema } = mongoose;

const experienceSchema = new Schema({
  experienceHolderId: { type: String, required: true },
  experienceCompany: { type: String, required: true },
  experienceStartDate: { type: Date, required: true },
  experienceEndtDate: { type: Date, required: true },
  experienceMission: { type: String, required: true },
  experienceDescription: { type: String, required: true },
});

const experience = mongoose.model('experience', experienceSchema);

module.exports = experience;
