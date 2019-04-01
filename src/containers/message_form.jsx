import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
// import Message from "../components/message";

import { createMessage, setMessages } from "../actions";

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
    event.preventDefault();
    const apiValue = this.state.value;
    this.setState({ value: '' });
    this.props.createMessage(
      this.props.selectedChannel,
      this.props.currentUser,
      apiValue,
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

