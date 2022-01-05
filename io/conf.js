const socketio = require('socket.io');

module.exports = function(server) {
    // socket.io server
    const io = socketio(server);

    io.on('connection', function(socket) {
        console.log('Un utilisateur se connecte');

        socket.on('disconnect', function() {
            console.log('Un utilisateur se deconnecte');
          });

        socket.on('chat message', function(data) {
        //console.log(`chat message: ${data.msg}`);
        io.emit('chat message', data);
        });
    });
};
