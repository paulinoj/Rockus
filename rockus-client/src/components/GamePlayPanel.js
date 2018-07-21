import React, { Component } from "react";
import { connect } from "react-redux";
import ScoreBoard from "components/ScoreBoard";
import ActionButton from "components/ActionButton";
import CountdownClock from "components/CountdownClock";
import ResponsePanel from "components/ResponsePanel";
import SongPanel from "components/SongPanel";
import { postNewHighScore } from "store/actions/songList";

class GamePlayPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameOver: false
    };
  }

  setGameOver() {
    const { highScorers } = this.props.songList;
    const { totalScore } = this.props;
    if (highScorers[highScorers.length - 1].score < totalScore) {
      this.props.postNewHighScore(totalScore,
        this.props.currentUser.user.id,
        this.props.songList._id);
    }
    this.setState({ gameOver: true });
  }

  componentDidUpdate() {
    if (this.props.timeRemaining === 0 && !this.state.gameOver) {
      this.setGameOver();
    }
  }

  renderSongList() {
    return this.props.songList.songs.map((song, index) => {
      return <SongPanel key={song._id} title={song.title} url={song.url} />
    });
  }

  render() {
    return (
      <div className="game-play-panel">
        <ScoreBoard />
        <ActionButton />
        <CountdownClock />
        <ResponsePanel />
        {this.renderSongList()}
      </div>
    )
  }
}

function  mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    songList: state.songList,
    totalScore: state.totalScore,
    timeRemaining: state.timeRemaining
  }
}

export default connect(mapStateToProps, { postNewHighScore })(GamePlayPanel);
