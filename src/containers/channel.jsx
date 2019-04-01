import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel } from "../actions";

class Channel extends Component {

  // componentWillMount() {
  //   this.props.setMessages();
  // }

  render() {
    // debugger
    return (
        <li>{this.props.channel}</li>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
}

// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(Channel);

