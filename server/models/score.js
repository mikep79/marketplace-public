var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ScoreSchema = new Schema({
    name: String,
    score: Number
});

module.exports = mongoose.model('score', ScoreSchema);