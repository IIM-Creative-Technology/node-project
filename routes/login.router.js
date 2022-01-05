const express = require('express');
const loginRouter = express.Router();


// Sign in
loginRouter.post('/signin', function(req, res, next) {
  console.log(req.body.username);
  res.status(200).json({msg: req.body.username});
});

// Sign up
loginRouter.post('/signup', function(req, res, next) {
    console.log(req.body.username);
    res.status(200).json({msg: req.body.username});
});

module.exports = loginRouter;