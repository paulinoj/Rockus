import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import GamePlayPanel from "components/GamePlayPanel";
import AuthForm from "components/AuthForm";
import { authUser } from "store/actions/auth";

const Main = props => {
  const { authUser } = props;
  return (
    <div className="main">
      <Route path="/game" component={GamePlayPanel} />
      <Route exact path="/signin" render={props => {
        return (
          <AuthForm
            onAuth={authUser}
            buttonText="Login In" 
            heading="Welcome Back" 
            {...props} 
          />
        );
      }} />
      <Route exact path="/signup" render={props => {
        return (
          <AuthForm
            onAuth={authUser}
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
    currentUser: state.currentUser
  };
}

export default withRouter(connect(mapStateToProps, { authUser })(Main));
