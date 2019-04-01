import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "../components/message";

import { setMessages } from "../actions";

class MessageList extends Component {

  componentWillMount() {
    console.log('componentWillMount called');
    this.props.setMessages();
    console.log('componentWillMount called > setMessages called');
  }

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Heading!</span>
        </div>
          {this.props.messages.map((message, index) => {
            return <Message key={message.name} message={message} tabIndex={index} />;
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

