import React, { Component } from "react";
import { connect } from "react-redux";
import { authUser } from "store/actions/auth";
import { removeError } from "store/actions/errors";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    }
  }

  componentDidMount() {
    this.props.history.listen(() => {
      this.props.removeError();
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.authUser(authType, this.state)
      .then(() => {
        console.log("LOGGED IN");
        this.props.history.push("/");
      })
      .catch(() => {
        return;
      });
  }

  render() {
    const { email, username, password } = this.state;
    const { 
      heading,
      buttonText,
      signUp,
      errors
    } = this.props;

    return (
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}>
          <h2>{heading}</h2>
          {errors.message && <div className="errors">{errors.message}</div>}
          <label htmlFor="email">Email:</label>
          <input 
            type="text" 
            id="email" 
            name="email" 
            onChange={this.handleChange} 
            value={email} />
          {signUp && (
            <div>
              <label htmlFor="username">User Name:</label>
              <input 
                type="text" 
                id="username" 
                name="username" 
                onChange={this.handleChange} 
                value={username} />
            </div>
          )}
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            name="password" 
            onChange={this.handleChange} />
          <button type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default connect(mapStateToProps, { authUser, removeError })(AuthForm);
