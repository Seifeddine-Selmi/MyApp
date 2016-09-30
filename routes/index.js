var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express JS' });
});

/* GET About page. */
router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});


/* GET contact page. */
router.get('/contact', function(req, res) {
    res.render('contact', { title: 'Contact'});
});

/* POST contact page (submit). */
router.post('/contact', function(req, res) {
  res.render('contact', { title: 'Contact', name: req.param('name') });
});



module.exports = router;
