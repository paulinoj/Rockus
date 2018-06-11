import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "store/actions";

class ResponsePanel extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="response-panel">
        RESPONSE PANEL
      </div>
    )
  }
}

export default connect(null, actions)(ResponsePanel);
