const mongoose = require('mongoose');
const { Schema } = mongoose;

const educationSchema = new Schema({
  educationHolderId: { type: String, required: true },
  educationLevel: { type: String, required: true },
  educationInstitution: { type: String, required: true },
  educationStartDate: { type: Date, required: true },
  educationEndtDate: { type: Date, required: true },
  educationDiploma: { type: String, required: true },
  educationDistinction: { type: String, required: true },
});

const education = mongoose.model('Education', educationSchema);

module.exports = education;
