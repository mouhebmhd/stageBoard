const mongoose = require('mongoose');
const { Schema } = mongoose;

const messageSchema = new Schema({
  messageSubject: { type: String, required: true },
  messageBody: { type: String, required: true },
  messageDate: { type: Date, required: true },
  isReadBySender: { type: Boolean, default: false },
  isReadByRecipient: { type: Boolean, default: false },
  idSender:{ type: String, required: true },
  idRecipient:{ type: String, required: true },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
