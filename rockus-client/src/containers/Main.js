import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "components/Homepage";
import GamePlayPanel from "components/GamePlayPanel";
import AuthForm from "components/AuthForm";
import { authUser } from "store/actions/auth";
import { removeError } from "store/actions/errors";

const Main = props => {
  const { currentUser, authUser, errors, removeError } = props;
  return (
    <div className="main">
      <Route exact path="/" render={props => {
       return (
        <Homepage currentUser={currentUser} />
       );
      }} />
      <Route exact path="/game" component={GamePlayPanel} />
      <Route exact path="/signin" render={props => {
        return (
          <AuthForm
            errors={errors}
            onAuth={authUser}
            removeError={removeError}
            buttonText="Login In" 
            heading="Welcome Back" 
            {...props} 
          />
        );
      }} />
      <Route exact path="/signup" render={props => {
        return (
          <AuthForm
            errors={errors}
            onAuth={authUser}
            removeError={removeError}
            signUp
            buttonText="Sign Up" 
            heading="I'm Ready To Rockus" 
            {...props} 
          />
        );
      }} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
