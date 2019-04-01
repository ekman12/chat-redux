import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Message from "../components/message";

import { setMessages } from "../actions";

class MessageList extends Component {

  componentWillMount() {
    this.props.setMessages(this.props.selectedChannel);
  }

  componentDidMount() {
    const fetchMessages = () => {
      this.props.setMessages(this.props.selectedChannel);
    };
    fetchMessages();
    // this.interval = setInterval(fetchMessages, 10000);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

// THE MOUNTING AND UNMOUNTING REFRESH NEEDS TO BE DONE

  render() {
    // const messages = this.props.setMessages(this.props.selectedChannel);
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>{this.props.selectedChannel}</span>
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
    messages: state.messages,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setMessages }, dispatch);
}

// export default MessageList;
export default connect(mapStateToProps, mapDispatchToProps)(MessageList);

