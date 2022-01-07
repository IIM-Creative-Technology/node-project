const socket = io();
//const chat = document.querySelector('.chat-form')
//const Input = document.querySelector('.chat-input')
const send = document.querySelector('#send');
console.log(send);
send.onsubmit = function(event) {
    // prevent page reloading
    console.log('form send');
    myFunction(event);
};

socket.on('chat message', function(data) {
    // create an <li> element
    const li = document.createElement('li');
    // set innerText with the message
    li.innerText = data.message;
    // append it to the chat
    chat.appendChild(li);
  });

function myFunction(event) {
    event.preventDefault();
    console.log('new function');
    // emit "chat message" event
    // and pass an object with the message
    socket.emit('chat message', { message: message.value });
    // reset input
    message.value = '';
}