var express = require('express');
var router = express.Router();
var dbScore = require('../models/score.js');

router.post('/', function (req, res) {
    var scoreData = req.body.data;
    var playerName = req.user.username;
    var newScore = new dbScore(
        {
            name: playerName,
            score: scoreData
        }
    );
    console.log('High score posted for user ', playerName, ' with scoreData: ', scoreData);
    newScore.save(function (err) {
        if (err) {
            console.log('Post Score error: ', err);
        } else {
            res.sendStatus(202);
        }
    });
});

module.exports = router;