import React, { Component } from "react";
import { connect } from "react-redux";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="score-board">
        TOTAL SCORE: {this.props.totalScore}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timeRemaining: state.timeRemaining,
    totalScore: state.totalScore
  }
}

export default connect(mapStateToProps)(ScoreBoard);
