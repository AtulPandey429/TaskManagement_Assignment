const express = require('express');
const Task = require('../models/task');
const isAuthenticated = require('../middleware/auth'); // Use 'const' instead of 'cons'

const router = express.Router();

// Display tasks for the logged-in user
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const tasks = await Task.find({ owner: req.user._id });
    res.render('dashboard', { tasks });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error'); // Handle errors gracefully
  }
});

// Create a new task
router.get('/create', isAuthenticated, (req, res) => {
  res.render('create-task'); // Render the task creation form
});

router.post('/create', isAuthenticated, async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const task = new Task({
      title,
      description,
      dueDate,
      owner: req.user._id,
    });
    await task.save();
    res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error'); // Handle errors gracefully
  }
});

// Update a task (example route, customize as needed)
router.get('/edit/:id', isAuthenticated, async (req, res) => {
  try {
    const taskId = req.params.id;
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).send('Task not found');
    }
    res.render('edit-task', { task }); // Render the task edit form
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error'); // Handle errors gracefully
  }
});

router.post('/edit/:id', isAuthenticated, async (req, res) => {
  try {
    const taskId = req.params.id;
    const { title, description, dueDate } = req.body;
    const updatedTask = {
      title,
      description,
      dueDate,
    };
    await Task.findByIdAndUpdate(taskId, updatedTask);
    res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error'); // Handle errors gracefully
  }
});

// Delete a task (example route, customize as needed)
router.post('/delete/:id', isAuthenticated, async (req, res) => {
  try {
    const taskId = req.params.id;
    await Task.findByIdAndRemove(taskId);
    res.redirect('/tasks');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error'); // Handle errors gracefully
  }
});

module.exports = router;
