var express = require('express');
var router = express.Router();
var dbScore = require('../models/score.js');

router.post('/', function (req, res) {
    var scoreData = req.body.data;
    var playerName = req.user.username;
    // var newScore = new dbScore(
    //     {
    //         name: playerName,
    //         score: scoreData
    //     }
    // );
    // console.log('High score posted for user ', playerName, ' with scoreData: ', scoreData);
    dbScore.updateOne({}, {$set: {'name': playerName, 'score': scoreData} }, { upsert: true }, function (err) {
        if (err) {
            console.log('Post Score error: ', err);
            res.sendStatus(500);
        } else {
            res.sendStatus(202);
        }
    });
});

router.get('/', function(req, res){
    dbScore.find({}, function(err, results){
        if (err) {
            console.log('Get Score error: ', err);
            res.sendStatus(500);
        } else {
            res.send(results);
        }
    });
});

module.exports = router;