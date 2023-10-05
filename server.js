const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const dotenv = require("dotenv").config();
const db = require("./config/database");
const flash = require('connect-flash');
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const path = require("path"); // Add this line to require the 'path' module

db();
const app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); // Set the views directory

const port = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Routes
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
