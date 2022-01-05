const express = require('express');
const User = require('./models/User.model');
const userRouter = express.Router();

// User list
userRouter.post('/users', function(req, res, next) {
  User.find().exec().then(users => {
    res.render('index', { users });
}).catch(error => res.send(error.message));



module.exports = userRouter;
