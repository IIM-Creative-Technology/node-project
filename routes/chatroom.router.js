const express = require('express');
const Chatroom = require('./models/Chatroom.model');
const chatroomRouter = express.Router();


// Chatroom list
chatroomRouter.post('/chatroom', function(req, res, next) {
    Chatroom.find().populate('user').exec().then(chatrooms => {
        res.render('index', { chatrooms });
    }).catch(error => res.send(error.message));
});

// Chatroom messages
chatroomRouter.post('/chatroom/:id', function(req, res, next) {
    Chatroom.findById(req.params.id).populate('user chatroom').exec().then(chatroom => {
        if(chatroom === null) throw new Error('La page n\'existe pas !');
        res.render('chatroom', {chatroom});
    }).catch(error => res.send(error.message)); 
});

module.exports = chatroomRouter;