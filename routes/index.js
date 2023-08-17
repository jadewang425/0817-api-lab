const express = require('express');
const router = express.Router();
const ROOT_URL = 'https://catfact.ninja'

/* GET home page. */
router.get('/', function(req, res, next) {
  fetch(`${ROOT_URL}/fact`)
    .then(res => res.json())
    .then(catFacts => {
      console.log('catFacts', catFacts)
      res.render('index', { title: 'Cat Facts', catFacts });
    })
});

module.exports = router;
