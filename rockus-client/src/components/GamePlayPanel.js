import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";
import StartButton from "components/StartButton";
import CountdownClock from "components/CountdownClock";
import ResponsePanel from "components/ResponsePanel";
import SongPanel from "components/SongPanel";

class GamePlayPanel extends Component {
  constructor(props) {
    super(props);
    /* DUMMY DATA */
    this.songList = [
      {title: "song1", url: "https://rockus-music.s3.amazonaws.com/Song1.mp3?AWSAccessKeyId=AKIAJ4SN4KBKOGX4O5XA&Expires=1528770033&Signature=dLoulOrqsHOZYLl5jLeXbct%2Bbhg%3D"},
      {title: "song2", url: "https://rockus-music.s3.amazonaws.com/Song2.mp3?AWSAccessKeyId=AKIAJ4SN4KBKOGX4O5XA&Expires=1528773910&Signature=24CyKdA65bNsbzFqa7vxLVY9UNQ%3D"},
      {title: "song3", url: "https://rockus-music.s3.amazonaws.com/Song3.mp3?AWSAccessKeyId=AKIAJ4SN4KBKOGX4O5XA&Expires=1528770053&Signature=5pMSFhV5hlW3WfYwfFrgg9HZKNA%3D"},
      {title: "song4", url: "https://rockus-music.s3.amazonaws.com/Song4.mp3?AWSAccessKeyId=AKIAJ4SN4KBKOGX4O5XA&Expires=1528770062&Signature=wAbwEzycaWqNkjhszdb1hWN%2F%2FNg%3D"},
      {title: "song5", url: "https://rockus-music.s3.amazonaws.com/Song5.mp3?AWSAccessKeyId=AKIAJ4SN4KBKOGX4O5XA&Expires=1528770070&Signature=Jcnc1Ku9BeAANXWuuDMgYLePZwQ%3D"}
    ];
  }

  renderSongList() {
    return this.songList.map((song, index) => {
      return <SongPanel key={index} title={song.title} url={song.url} />
    });
  }

  render() {
    return (
      <div className="game-play-panel">
        <StartButton />
        <CountdownClock />
        <ResponsePanel />
        {this.renderSongList()}
      </div>
    )
  }
}

export default connect(null, actions)(GamePlayPanel);
