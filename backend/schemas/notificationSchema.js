const mongoose = require('mongoose');
const { Schema } = mongoose;

const notificationSchema = new Schema({
  notificationMessage: { type: String, required: true },
  notificationDate: { type: Date, required: true },
  idRecipient: { type: Boolean, default: false },
});

const notification = mongoose.model('notification', notificationSchema);

module.exports = notification;
