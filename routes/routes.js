var express = require('express');
const { routeHandler } = require('../handlers/routeHandlers');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/path', routeHandler)

module.exports = router;
