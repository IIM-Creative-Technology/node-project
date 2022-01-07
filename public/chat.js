const socket = io();

//const chat = document.querySelector('.chat-form')
//const Input = document.querySelector('.chat-input')

send.onsubmit = function (event) {
  // prevent page reloading
  event.preventDefault();
  // emit "chat message" event
  // and pass an object with the message
  socket.emit('chat message', { msg: message.value });
  // reset input
  message.value = '';
};

socket.on('chat message', function (data) {
  // create an <li> element
  const p = document.createElement('p');
  // set innerText with the message
  p.innerText = data.msg;
  // append it to the chat
  chat.appendChild(p);
});
