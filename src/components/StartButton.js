import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";

class StartButton extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="start-button">
        START BUTTON
      </div>
    )
  }
}

export default connect(null, actions)(StartButton);
