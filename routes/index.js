var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('$(__dirname)/public/index.html')
});

// Login
router.post('/login', function(req, res, next) {
  console.log(req.body.username);
  res.status(200).json({msg: req.body.username});
});

module.exports = router;

// user
// chatroom
// Message