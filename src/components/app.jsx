import React from 'react';
import MessageList from "../containers/message_list";
import MessageForm from "../containers/message_form";

const App = () => {
  return (
    <div className="app">
      <p>React + Redux starter</p>
      <MessageList />
      <MessageForm />
    </div>
  );
};

export default App;
