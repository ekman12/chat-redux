import React from 'react';
import MessageList from "../containers/message_list";
import ChannelList from "../containers/channel_list";
import MessageForm from "../containers/message_form";

const App = () => {
  return (
    <div className="app messaging-wrapper">
      <div className="channels-container">
        <ChannelList />
      </div>
      <div className="channel-container">
        <MessageList />
        <MessageForm />
      </div>
    </div>
  );
};

export default App;
