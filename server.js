const express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
const dotenv = require("dotenv").config();
const db = require("./config/database");
const flash = require('connect-flash');
const authRoutes = require("./routes/auth");
const taskRoutes = require("./routes/tasks");
const path = require("path");

db();
const app = express();
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

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

// Define a route for the login/signup page
app.get("/", (req, res) => {
  res.render("home.ejs"); // Render the login_signup.ejs template
});


// Routes
app.use("/auth", authRoutes);
app.use("/tasks", taskRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
