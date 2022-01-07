var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile('$(__dirname)/public/index.html');
});

/* GET about page. */
router.get('/lateam', (req, res) => {
  res.render('team');
});

/* GET about page. */
router.get('/chatroom', (req, res) => {
  res.render('welcomeroom');
});

/* GET about page. */
router.get('/room', (req, res) => {
  res.render('chatroom');
});

// Login
router.post('/login', function (req, res, next) {
  console.log(req.body.username);
  res.status(200).json({ msg: req.body.username });
});

module.exports = router;

// user
// chatroom
// Message
