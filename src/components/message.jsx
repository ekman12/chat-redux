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
      <div className="message">
        <strong>{this.props.message.content}</strong> - {this.props.message.author}
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
