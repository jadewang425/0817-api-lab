const express = require('express');
const router = express.Router();
const ROOT_URL = 'https://catfact.ninja'

/* GET a catFact. */

router.get('/fact', function(req, res, next) {
  fetch(`${ROOT_URL}/fact`)
    .then(res => res.json())
    .then(catFacts => {
      console.log('catFacts', catFacts)
      res.render('catFact', { title: 'Cat Facts', catFacts });
    })
});

module.exports = router;
