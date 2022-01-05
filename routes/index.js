var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({msg: "Hello world"});
});

router.post('/login', function(req, res, next) {
  const password = req.body.password;
  if (password === "qwerty") {
    res.status(200).json({username: req.body.username});
  } else {
    res.status(403).json({msg:"Wrong password, try again"})
  }
});


module.exports = router;

// user
// chaatroom
// Message
