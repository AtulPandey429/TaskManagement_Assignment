const express = require('express');
const router = express.Router();
const authRoutes = require('./auth');
const taskRoutes = require('./tasks');

// Register authentication and task management routes
router.use('/auth', authRoutes);
router.use('/tasks', taskRoutes);

module.exports = router;
