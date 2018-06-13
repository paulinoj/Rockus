require("dotenv").load();
const jwt = require("jsonwebtoken");

// Make sure the user is logged in
exports.isAuthenticated = function(req, res, next) {
  try {
    // Authorization header is in format:  "Bearer fdafdsxydfafds[ooit"
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, payload) {
      if (payload) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Please log in first"
        });
      }
    });
  } catch (e) {
    return next({ 
      status: 401, 
      message: "Please log in first" 
    });
  }
};

// Make sure we get the correct user
exports.isAuthorized = function(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.SECRET_KEY, function(err, payload) {
      if (payload && payload.id === req.params.id) {
        return next();
      } else {
        return next({
          status: 401,
          message: "Unauthorized"
        });
      }
    });
  } catch (e) {
    return next({
      status: 401,
      message: "Unauthorized"
    });
  }
};
