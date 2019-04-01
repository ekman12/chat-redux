import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectChannel, setMessages } from "../actions";

class Channel extends Component {
  handleClick = () => {
    this.props.selectChannel(this.props.channel);
    this.props.setMessages(this.props.channel);
  };

  render() {
    return (
      <li className="channel-item" onClick={this.handleClick}>{this.props.channel}</li>
    );
  }
}

function mapStateToProps(state) {
  // debugger
  return {
    selectedChannel: state.selectedChannel,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, setMessages }, dispatch);
}

// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(Channel);

//
