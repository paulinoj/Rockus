import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";

class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const authType = this.props.signUp ? "signup" : "signin";
    this.props.onAuth(authType, this.state)
      .then(() => {
        console.log("LOGGED IN");
      })
  }

  render() {
    const { email, username, password } = this.state;
    const { heading, buttonText, signUp } = this.props;
    return (
      <div className="auth-form">
        <form onSubmit={this.handleSubmit}>
          <h2>{heading}</h2>
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

export default connect(null, actions)(AuthForm);
