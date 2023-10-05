const passport = require('passport');

// Authentication middleware for checking if a user is authenticated
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    // If user is authenticated, continue to the next middleware/route
    return next();
  }

  // If user is not authenticated, redirect to the login page
  res.redirect('/auth/login');
}

// Export the isAuthenticated middleware
module.exports= isAuthenticated;
