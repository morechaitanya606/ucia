const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const { auth, authorize } = require('../middleware/auth');

// Public: Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message, projectRef } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        ok: false,
        message: 'Name, email, and message are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        ok: false,
        message: 'Invalid email address'
      });
    }

    const newMessage = await Message.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      subject: subject?.trim() || 'General Inquiry',
      message: message.trim(),
      projectRef
    });

    // TODO: Add email notification using nodemailer
    // await sendNotificationEmail(newMessage);

    res.status(201).json({
      ok: true,
      message: 'Message sent successfully! We\'ll get back to you soon.'
    });
  } catch (err) {
    console.error('Contact form error:', err);
    res.status(500).json({
      ok: false,
      message: 'Failed to send message. Please try again.'
    });
  }
});

// Admin: Get all messages
router.get('/', auth, authorize('admin'), async (req, res) => {
  try {
    const { status, page = 1, limit = 20 } = req.query;

    const query = status ? { status } : {};
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const [messages, total] = await Promise.all([
      Message.find(query)
        .populate('projectRef', 'title slug')
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(parseInt(limit)),
      Message.countDocuments(query)
    ]);

    res.json({
      ok: true,
      messages,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (err) {
    console.error('Get messages error:', err);
    res.status(500).json({ message: 'Failed to fetch messages' });
  }
});

// Admin: Update message status
router.patch('/:id/status', auth, authorize('admin'), async (req, res) => {
  try {
    const { status } = req.body;

    if (!['new', 'seen', 'archived'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    res.json({ ok: true, message });
  } catch (err) {
    console.error('Update message status error:', err);
    res.status(500).json({ message: 'Failed to update message status' });
  }
});

// Admin: Delete message
router.delete('/:id', auth, authorize('admin'), async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);

    if (!message) {
      return res.status(404).json({ message: 'Message not found' });
    }

    res.json({ ok: true, message: 'Message deleted' });
  } catch (err) {
    console.error('Delete message error:', err);
    res.status(500).json({ message: 'Failed to delete message' });
  }
});

module.exports = router;
