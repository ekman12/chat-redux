// const messages = [
//   {
//     author: "anonymous92",
//     content: "Hello world!",
//     created_at: "2017-09-26T23:03:16.365Z"
//   },
//   {
//     author: "anonymous77",
//     content: "My name is anonymous77",
//     created_at: "2017-09-26T23:03:21.194Z"
//   }
// ];

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

// export function createMessage(message) {
//   // console.log('selectedChannel called so dont lint');
//   return {
//     type: "CREATE_MESSAGE",
//     payload: message
//   };
// }

export function createMessage(channel, author, content) {
  // TODO
  const body = {
    content: content,
    author: author
  };
  const url = `https://wagon-chat.herokuapp.com/${channel}/messages`;
  const promise = fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      return data
    });
  return {
    type: "SET_MESSAGES",
    payload: promises
  };
    // debugger
}

// TODO: add and export your own actions
