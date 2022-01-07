const socketio = require('socket.io');
const Message = require('../models/Messages');

module.exports = function(server) {
    // socket.io server
    const io = socketio(server);

    io.on('connection', function(socket) {
        console.log('Un utilisateur se connecte');

        socket.on('disconnect', function() {
            console.log('Un utilisateur se deconnecte');
        });

        socket.on('chat message', function(data) {
            const message = new Message(data)
            message.save()
            .then(() => {
                io.emit('chat message', data);
            })
            .catch(error => ("it doesn't work")); 
        });
    });
};
