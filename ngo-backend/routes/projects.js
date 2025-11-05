const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const auth = require('../middleware/auth');

// public: list
router.get('/', async (req, res) => {
  const projects = await Project.find().sort({ createdAt: -1 });
  res.json(projects);
});

// admin: create
router.post('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  const { slug, title, subtitle, description, bannerUrl } = req.body;
  const p = await Project.create({ slug, title, subtitle, description, bannerUrl });
  res.json(p);
});

module.exports = router;
