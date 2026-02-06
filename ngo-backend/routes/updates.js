const express = require('express');
const router = express.Router();
const Update = require('../models/Update');
const Project = require('../models/Project');
const { auth, authorize } = require('../middleware/auth');

// Public: Get updates by project slug
router.get('/project/:slug', async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const updates = await Update.find({
      project: project._id,
      published: true
    })
      .populate('postedBy', 'name')
      .sort({ date: -1 });

    res.json({ ok: true, updates });
  } catch (err) {
    console.error('Get updates error:', err);
    res.status(500).json({ message: 'Failed to fetch updates' });
  }
});

// Admin/Editor: Create update
router.post('/', auth, authorize('admin', 'editor'), async (req, res) => {
  try {
    const { projectId, title, content, media, published } = req.body;

    // Validation
    if (!projectId || !title || !content) {
      return res.status(400).json({ message: 'Project, title, and content are required' });
    }

    // Verify project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const update = await Update.create({
      project: projectId,
      title,
      content,
      media,
      postedBy: req.user._id,
      published: published !== false
    });

    await update.populate('postedBy', 'name');

    res.status(201).json({ ok: true, update });
  } catch (err) {
    console.error('Create update error:', err);
    res.status(500).json({ message: 'Failed to create update' });
  }
});

// Admin/Editor: Update an update
router.put('/:id', auth, authorize('admin', 'editor'), async (req, res) => {
  try {
    const update = await Update.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    ).populate('postedBy', 'name');

    if (!update) {
      return res.status(404).json({ message: 'Update not found' });
    }

    res.json({ ok: true, update });
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).json({ message: 'Failed to update' });
  }
});

// Admin: Delete update
router.delete('/:id', auth, authorize('admin'), async (req, res) => {
  try {
    const update = await Update.findByIdAndDelete(req.params.id);

    if (!update) {
      return res.status(404).json({ message: 'Update not found' });
    }

    res.json({ ok: true, message: 'Update deleted' });
  } catch (err) {
    console.error('Delete update error:', err);
    res.status(500).json({ message: 'Failed to delete update' });
  }
});

module.exports = router;
