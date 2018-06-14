import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import GamePlayPanel from "components/GamePlayPanel";

const Main = props => {
  return (
    <div className="main">
      {/* <Switch>
        <Route exact path="/" render={props => <Homepage {...props} />} />
      </Switch> */}
      <Route path="/game" component={GamePlayPanel} />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

// export default withRouter(connect(mapStateToProps, null)(Main));
export default connect(mapStateToProps, null)(Main);
