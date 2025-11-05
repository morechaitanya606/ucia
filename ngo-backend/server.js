require('dotenv').config();
const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors');

app.use(cors());
app.use(express.json({ limit: '10mb' }));

// connect db
connectDB(process.env.MONGO_URI).then(() => console.log('MongoDB connected'));

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/projects'));
app.use('/api/updates', require('./routes/updates'));
app.use('/api/contact', require('./routes/contact'));

// static files (optional) serve built frontend from /public
app.use(express.static('public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server running on', PORT));
