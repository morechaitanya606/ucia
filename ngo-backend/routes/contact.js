const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// public contact posting
router.post('/', async (req, res) => {
  const { name, email, message, projectRef } = req.body;
  const m = await Message.create({ name, email, message, projectRef });
  // optionally: send email notification to admin using nodemailer
  res.json({ ok: true });
});

// admin: list messages (requires auth)
const auth = require('../middleware/auth');
router.get('/', auth, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Forbidden' });
  const messages = await Message.find().sort({ createdAt: -1 });
  res.json(messages);
});

module.exports = router;
