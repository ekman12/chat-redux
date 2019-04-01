import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Channel from "./channel"; // DON'T NEED THIS

// import { setChannels } from "../actions";
import { selectChannel } from "../actions";

class ChannelList extends Component {

  // componentWillMount() {
  //   this.props.setChannels();
  // }

  handleClick = (event) => {
    console.log(event.target.innerText);
    this.props.selectChannel(event.target.innerText);
  }

  render() {
    return (
      <ul>
        {this.props.channels.map((channel, index) => {
          // return <li onClick={this.handleClick}>{channel}</li>
          return <Channel channel={channel} key={channel} />;
        })}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

// export default Channel;
export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);

