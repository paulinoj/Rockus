import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";

class SongPanel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="song-panel">
        SONG PANEL
      </div>
    )
  }
}

export default connect(null, actions)(SongPanel);
