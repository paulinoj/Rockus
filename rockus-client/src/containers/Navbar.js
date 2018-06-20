import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "store/actions/auth";

class Navbar extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    return (
      <nav>
        <div>
          <Link to="/">
            <img src="" alt=""/>
          </Link>
        </div>
        {this.props.currentUser.isAuthenticated ? (
          <ul>
            <li>
              <a onClick={this.logout}>Logout</a>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/signup">Sign up</Link>
            </li>
            <li>
              <Link to="/signin">Log in</Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser  
  };
}

export default connect(mapStateToProps, {logout})(Navbar);
