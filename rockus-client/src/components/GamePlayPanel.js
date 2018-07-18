import React, { Component } from "react";
import { connect } from "react-redux";
import ScoreBoard from "components/ScoreBoard";
import ActionButton from "components/ActionButton";
import CountdownClock from "components/CountdownClock";
import ResponsePanel from "components/ResponsePanel";
import SongPanel from "components/SongPanel";
import { fetchSongList } from "store/actions/songList";

class GamePlayPanel extends Component {
  constructor(props) {
    super(props);
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
    songList: state.songList
  }
}

export default connect(mapStateToProps, { fetchSongList })(GamePlayPanel);
