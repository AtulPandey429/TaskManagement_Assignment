const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

// Registration Route
router.get('/signup', (req, res) => {
  res.render('signup'); // Render the signup form
});

router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.redirect('/auth/login');
  } catch (err) {
    console.error(err);
    res.redirect('/auth/signup'); // Handle errors gracefully
  }
});

// Login Route
router.get('/login', (req, res) => {
  res.render('login'); // Render the login form
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/tasks',
    failureRedirect: '/auth/login',
    failureFlash: true, // Enable flash messages for authentication errors
  })
);

// Logout Route
router.get('/logout', (req, res) => {
  req.logout(function (err) {
    if (err) {
      console.error(err);
    }
    res.redirect('/auth/login');
  });
});

module.exports = router;
