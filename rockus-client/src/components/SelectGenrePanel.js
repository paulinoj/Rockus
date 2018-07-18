import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { fetchSongList } from "store/actions/songList";
import { setTimeRemaining, resetPlayableSongCount } from "store/actions";

class SelectGenrePanel extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.setTimeRemaining(-1);
    this.props.resetPlayableSongCount();
  }

  handleClick = (e) => {
    this.props.fetchSongList(this.props.currentUser.user.id, e.target.name)
      .then(() => {
        this.props.history.push("/game")
      })
      .catch(() => {
        console.log("DO WE CATCH");
      });
  }

  render() {
    let { errors } = this.props;
    return (
      <div className="select-genre-panel">
        {errors.message && <div className="errors">{errors.message}</div>}
        <button onClick={this.handleClick} name="Disco">
          Disco
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  }
}

export default withRouter(connect(mapStateToProps, 
  { fetchSongList,
    setTimeRemaining,
    resetPlayableSongCount })(SelectGenrePanel));
