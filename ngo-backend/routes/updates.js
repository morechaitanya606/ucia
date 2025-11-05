const express = require('express');
const router = express.Router();
const Update = require('../models/Update');
const Project = require('../models/Project');
const auth = require('../middleware/auth');

// public by project slug
router.get('/project/:slug', async (req, res) => {
  const project = await Project.findOne({ slug: req.params.slug });
  if (!project) return res.status(404).json({ message: 'Project not found' });
  const updates = await Update.find({ project: project._id, published: true })
                             .populate('postedBy', 'name')
                             .sort({ date: -1 });
  res.json(updates);
});

// admin: post update
router.post('/', auth, async (req, res) => {
  if (!['admin','editor'].includes(req.user.role)) return res.status(403).json({ message: 'Forbidden' });
  const { projectId, title, content, media } = req.body;
  const u = await Update.create({ project: projectId, title, content, media, postedBy: req.user._id });
  res.json(u);
});

module.exports = router;
