const mongoose = require('mongoose');

const updateSchema = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  media: String, // storing URL from storage (S3, Cloudinary, etc.)
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Date, default: Date.now },
  published: { type: Boolean, default: true }
});

module.exports = mongoose.model('Update', updateSchema);
