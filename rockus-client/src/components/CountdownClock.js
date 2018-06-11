import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";

class CountdownClock extends Component {
  constructor() {
    super();
    this.state = {
      countdownClockStarted: false
    }
  }

  componentDidUpdate() {
    if (!this.state.countdownClockStarted && this.props.timeRemaining > 0) {
      this.timeLimit = this.props.timeRemaining;    
      this.setState({ countdownClockStarted: true });
      const startTime = new Date();
      this.counterControl = setInterval(() => {
        const currentTime = new Date();
        const timeRemaining = this.timeLimit - Math.floor((currentTime - startTime)/1000);
        this.props.setTimeRemaining(timeRemaining);
      }, 250)
    }
    if (this.props.timeRemaining <= 0) {
      clearInterval(this.counterControl);
    }
  }

  render() {
    const { timeRemaining } = this.props;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = ((timeRemaining % 60) + 100).toString().substring(1);
    return (
      <div className="countdown-clock">
        {minutes} : {seconds}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timeRemaining: state.timeRemaining
  }
}

export default connect(mapStateToProps, actions)(CountdownClock);
