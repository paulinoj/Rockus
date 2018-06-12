const db = require("../models");
const jwt = require("jsonwebtoken");

exports.signin = function() {

}

exports.signup = async function(req, res, next) {

  // create a user
  try {
    let user = await db.User.create(req.body);
    let { id, username } = user;

    // create a token (signing a token)
    let token = jwt.sign(
      {
        id,
        username
      },
      process.env.SECRET_KEY
    );
    return res.status(200).json({
      id,
      username,
      token
    });

  } catch (err) {
    // if a validation fails
    if (err.code === 11000) {
      err.message = "Sorry, that username and/or email is taken";
    }
    return next({
      status: 400,
      message: err.message
    });
  }
};
