const express = require('express');
const router = express.Router();

/* // Login
router.post('/login', function (req, res, next) {
  console.log(req.body.username);
  res.status(200).json({ msg: req.body.username });
}); */

/* GET about page. */
router.get('/', (req, res) => {
    res.render('login');
  });

module.exports = router;