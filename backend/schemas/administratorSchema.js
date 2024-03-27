const mongoose = require('mongoose');
const { Schema } = mongoose;

const adminSchema = new Schema({
  nomAdmin: { type: String, required: true },
  prenomAdmin: { type: String, required: true },
  emailAdmin: { type: String, required: true, unique: true },
  passwordAdmin: { type: String, required: true },
  genreAdmin: { type: String, required: true },
  photoAdmin: { type: String }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
