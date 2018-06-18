import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";

class StartButton extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.setTimeRemaining(120);
  }

  render() {
    return (
      <div className="start-button">
        <button onClick={this.handleClick}>Start Game</button>
      </div>
    )
  }
}

export default connect(null, actions)(StartButton);
