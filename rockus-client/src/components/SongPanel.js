import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";
import Equalizer from "components/Equalizer";
import Answer from "components/Answer";

class SongPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songStarted: false,
      songGuessedCorrectly: false,
      songScore: 0
    }
  }

  componentDidMount() {
    const _listener = () => {
      this.props.incPlayableSongCount();
      this.audio.removeEventListener("canplaythrough", _listener);
    };
    this.audio.addEventListener("canplaythrough", _listener);
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.answer === this.props.title && !this.state.songGuessedCorrectly) ||
        (nextProps.timeRemaining === 0 && this.state.songScore === 0)) {
      this.setState({ songGuessedCorrectly: true });
      this.setState({ songScore: nextProps.timeRemaining }, () => {
        this.props.incTotalScore(this.state.songScore);
      });
      this.audio.pause();
    } else if (nextProps.answer === this.props.title && this.state.songGuessedCorrectly) {
      // Make answerbox flash
    }  
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
    const { title, url } = this.props;
    const answerCorrect = this.state.songGuessedCorrectly;
    return (
      <div className="song-panel">
        <audio controls ref={(audio) => { this.audio = audio }} >
          <source src={url} type="audio/mpeg" />
        </audio>
        <Answer show={answerCorrect} title={title} score={this.state.songScore} />
        <Equalizer show={!answerCorrect} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    answer: state.answer,
    timeRemaining: state.timeRemaining
  }
}

export default connect(mapStateToProps, actions)(SongPanel);
