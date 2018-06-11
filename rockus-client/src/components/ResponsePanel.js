import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";

class ResponsePanel extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setAnswer(this.state.value);
    this.setState({
      value: ""
    });
  }

  render() {
    const { value } = this.state;
    return (
      <div className="response-panel">
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={value}/>
          <button>GUESS</button>
        </form>
      </div>
    )
  }
}

export default connect(null, actions)(ResponsePanel);
