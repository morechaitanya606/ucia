const express = require('express');
const router = express.Router();
const Project = require('../models/Project');
const { auth, authorize } = require('../middleware/auth');

// Public: Get all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
      .select('-createdBy')
      .sort({ createdAt: -1 });
    res.json({ ok: true, projects });
  } catch (err) {
    console.error('Get projects error:', err);
    res.status(500).json({ message: 'Failed to fetch projects' });
  }
});

// Public: Get single project by slug
router.get('/:slug', async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.json({ ok: true, project });
  } catch (err) {
    console.error('Get project error:', err);
    res.status(500).json({ message: 'Failed to fetch project' });
  }
});

// Admin: Create new project
router.post('/', auth, authorize('admin'), async (req, res) => {
  try {
    const { slug, title, description, shortDescription, icon, gradient, stats, features, status } = req.body;

    // Validation
    if (!slug || !title) {
      return res.status(400).json({ message: 'Slug and title are required' });
    }

    // Check if slug exists
    const existing = await Project.findOne({ slug });
    if (existing) {
      return res.status(400).json({ message: 'Project with this slug already exists' });
    }

    const project = await Project.create({
      slug,
      title,
      description,
      shortDescription,
      icon,
      gradient,
      stats,
      features,
      status: status || 'ongoing',
      createdBy: req.user._id
    });

    res.status(201).json({ ok: true, project });
  } catch (err) {
    console.error('Create project error:', err);
    res.status(500).json({ message: 'Failed to create project' });
  }
});

// Admin: Update project
router.put('/:slug', auth, authorize('admin'), async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { slug: req.params.slug },
      { $set: req.body },
      { new: true, runValidators: true }
    );

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ ok: true, project });
  } catch (err) {
    console.error('Update project error:', err);
    res.status(500).json({ message: 'Failed to update project' });
  }
});

// Admin: Delete project
router.delete('/:slug', auth, authorize('admin'), async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({ slug: req.params.slug });

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    res.json({ ok: true, message: 'Project deleted' });
  } catch (err) {
    console.error('Delete project error:', err);
    res.status(500).json({ message: 'Failed to delete project' });
  }
});

module.exports = router;
