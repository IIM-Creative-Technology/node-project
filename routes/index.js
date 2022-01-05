var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({msg: "Hello world"});
});

router.get('/login', function(req, res, next) {
  res.status(200).json({msg: "connect"});
});


module.exports = router;

// user
// chaatroom
// Message
