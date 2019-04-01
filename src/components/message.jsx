import React, { Component } from 'react';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// const Message = () => {
//   return (
//     <div className="message">
//       <p>message</p>
//     </div>
//   );
// };


class Message extends Component {
  // handleClick = () => {
  //   console.log(this.props.city)
  //   this.props.activeCity(this.props.city);
  // };

  render() {
    return (
      <div className="message-container">
        <i>
          {this.props.message.author} <small> {this.props.message.created_at} </small>
        </i>
        <p> {this.props.message.content} </p>
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     messages: state.messages
//   };
// }

// function mapDispatchToPr ops(dispatch) {
//   return bindActionCreators({ setMessages }, dispatch);
// }

// // export default MessageList;
// export default connect(mapStateToProps, mapDispatchToProps)(Message);


export default Message;
