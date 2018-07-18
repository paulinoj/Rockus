import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "store/actions";

class StartButton extends Component {
  constructor(props) {
    super(props);
    this.timeLimit = 30;
  }

  handleClick = (e) => {
    const action = e.target.name;
    if (action === "start") {
      this.props.setTimeRemaining(this.timeLimit);
    }
    else {
      this.props.history.push("/");
    }
  }

  render() {
    const { timeRemaining, playableSongCount } = this.props;
    if (timeRemaining === -1) {
      return (
        <div className="start-button">
          <button name="start" onClick={this.handleClick} disabled={playableSongCount !== 5}>Start Game</button>
        </div>
      );
    } else if (timeRemaining === 0) {
      return (
        <div className="play-again-button">
          <button name="playAgain" onClick={this.handleClick}>Play Again</button>
        </div>
      );
    } else return null;
  }
}

function mapStateToProps(state) {
  return ({
    timeRemaining: state.timeRemaining,
    playableSongCount: state.playableSongCount
  })
}

export default withRouter(connect(mapStateToProps, actions)(StartButton));
