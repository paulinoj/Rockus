import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";

class CountdownClock extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="countdown-clock">
        SONG PANEL
      </div>
    )
  }
}

export default connect(null, actions)(CountdownClock);
