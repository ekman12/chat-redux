// const messages = fetch('https://wagon-chat.herokuapp.com/general/messages')
//   .then(response => response.json())
//   .then((data) => {
//     console.log(`fetched messages is ${data.messages}`);
//     return data.messages;
//   });

export function setMessages(channel) {
  console.log(`set messages ${channel}`);
  const messages = fetch(`https://wagon-chat.herokuapp.com/${channel}/messages`)
  .then(response => response.json())
  .then((data) => {
    return data.messages;
  });
  return {
    type: "SET_MESSAGES",
    payload: messages
  };
}

export function createMessage(channel, author, content) {
  const body = { content, author };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => data);
}

export function selectChannel(channel) {
  console.log("select channel triggered");
  return {
    type: "SELECT_CHANNEL",
    payload: channel
  };
}
