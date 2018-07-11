import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import Homepage from "components/Homepage";
import GamePlayPanel from "components/GamePlayPanel";
import AuthForm from "components/AuthForm";
import withAuth from "hocs/withAuth";

const Main = props => {
  return (
    <div className="main">
      <Route exact path="/" render={props => {
       return (
        <Homepage />
       );
      }} />
      <Route exact path="/game" component={withAuth(GamePlayPanel)} />
      <Route exact path="/signin" render={props => {
        return (
          <AuthForm
            buttonText="Login In"
            heading="Welcome Back"
            {...props}
          />
        );
      }} />
      <Route exact path="/signup" render={props => {
        return (
          <AuthForm
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

export default withRouter(Main);
