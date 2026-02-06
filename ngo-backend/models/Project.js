const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: String,
  shortDescription: String,
  icon: String,
  gradient: String,
  startDate: Date,
  endDate: Date,
  status: { type: String, enum: ['ongoing', 'completed', 'planned'], default: 'ongoing' },
  stats: [{
    value: String,
    label: String
  }],
  features: [String],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
