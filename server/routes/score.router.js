var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    var newScore = req.body.data;
    // console.log('High score posted with newScore: ', newScore);
    res.sendStatus(202);
});

module.exports = router;