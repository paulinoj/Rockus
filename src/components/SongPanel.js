import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";
import Equalizer from "components/Equalizer";

class SongPanel extends Component {
  constructor() {
    super();
    this.state = {
      songStarted: false
    }
  }

  componentDidMount() {
    const _listener = () => {
      this.props.incPlayableSongCount();
      this.audio.removeEventListener("canplaythrough", _listener);
    };
    this.audio.addEventListener("canplaythrough", _listener);
  }

  componentDidUpdate() {
    if (!this.state.songStarted) {
      if (this.props.timeRemaining > 0) {
        this.audio.currentTime = 10;
        this.audio.play();
        this.setState({ songStarted: true });
      }
    }
  }

  render() {
    const { url } = this.props;
    return (
      <div className="song-panel">
        <audio controls ref={(audio) => { this.audio = audio }} >
          <source src={url} type="audio/mpeg" />
        </audio>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    timeRemaining: state.timeRemaining
  }
}

export default connect(mapStateToProps, actions)(SongPanel);
