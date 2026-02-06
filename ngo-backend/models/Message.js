const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, default: 'General Inquiry' },
  message: { type: String, required: true },
  projectRef: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' },
  status: {
    type: String,
    enum: ['new', 'seen', 'archived'],
    default: 'new'
  }
}, { timestamps: true });

// Index for faster queries
messageSchema.index({ status: 1, createdAt: -1 });

module.exports = mongoose.model('Message', messageSchema);
