const messages = fetch('https://wagon-chat.herokuapp.com/general/messages')
  .then(response => response.json())
  .then((data) => {
    console.log(`fetched messages is ${data.messages}`);
    return data.messages;
  });

export function setMessages() {
  console.log('setMessage action called');
  return {
    type: "SET_MESSAGES",
    payload: messages
  };
}

export function createMessage(channel, author, content) {
  // debugger
  const body = { content, author };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  return fetch(url, {
    method: 'POST',
    headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(data => data);
}

