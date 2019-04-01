import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Channel from "./channel";

// import { setChannels } from "../actions";

class ChannelList extends Component {

  // componentWillMount() {
  //   this.props.setChannels();
  // }

  render() {
    return (
        <ul>
          {this.props.channels.map((channel, index) => {
            return <Channel key={channel} channel={channel} tabIndex={index} />;
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

