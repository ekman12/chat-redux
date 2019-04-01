import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import Message from "../components/message";

import { createMessage } from "../actions";

class MessageForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  handleSubmit(event) {
    // event.preventDefault(); THIS CREATES AN ERROR BUT STOPS THE PAGE REFRESHING AND EVEN THE MESSAGE SENDING
    // TRIED SETTING VALUE TO '' BUT DIDN'T UPDATE FORM
    this.props.createMessage(
      this.props.selectedChannel,
      this.props.currentUser,
      this.state.value
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    currentUser: state.currentUser,
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

// export default MessageForm;
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

