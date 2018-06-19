import React from "react";
import { Link } from "react-router-dom";

const Homepage = ({ currentUser }) => {
  if (!currentUser.isAuthenticated) {
    return (
      <div className="home-page">
        <h1>YOU NEED TO SIGN IN OR SIGN UP</h1>
        <Link to="/signup">
          Sign up here
        </Link>
      </div>
    );
  }
  return (
    <div>
      <h1>THIS IS THE HOME PAGE AFTER BEING LOGGED IN</h1>
      <div>Current User:  <span>{currentUser.user.username}</span></div>
    </div>
  );
};

export default Homepage;