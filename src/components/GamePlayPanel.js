import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";
import StartButton from "components/StartButton";
import CountdownClock from "components/CountdownClock";
import ResponsePanel from "components/ResponsePanel";

class GamePlayPanel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="game-play-panel">
        GAME PLAY PANEL
        <StartButton />
        <CountdownClock />
        <ResponsePanel />
      </div>
    )
  }
}

export default connect(null, actions)(GamePlayPanel);
