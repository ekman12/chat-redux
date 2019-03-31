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
    console.log(event.target.value);
    this.setState({value: event.target.value});
  }


  // IT IS NOT DOING THE EVENT EACH TIME.
  // HOW CAN I GET IT TO TRIGGER JUST ON SUBMIT

  handleSubmit(event) {
    console.log('Submitted: ' + this.state.value);
    this.props.createMessage('general', 'tomek', 'test!');
    // event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createMessage }, dispatch);
}

// export default MessageForm;
export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);

