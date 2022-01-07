var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile('$(__dirname)/public/index.html');
});

router.get('/chatroom', (req, res) => {
  res.render('chatroom');
});
/* GET team page. */
router.get('/lateam', (req, res) => {
  res.render('team');
});

/* GET about page. */
router.get('/apropos', (req, res) => {
  res.render('about');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
});

module.exports = router;

// user
// chatroom
// Message
