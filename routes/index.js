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

module.exports = router;

// user
// chatroom
// Message
