const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  projectRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  createdAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['new','seen','archived'], default: 'new' }
});

module.exports = mongoose.model('Message', messageSchema);
