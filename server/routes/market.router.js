/**
 * Express router providing market related routes
 * @module routes/market
 * @requires express
 */

// express module
var express = require('express');

// Express router to mount market related functions on.
var router = express.Router();

// For base mode, use this array
// As a stretch goal, move this to the database
var marketItems = [
  { id: 1, name: 'Apple', cost: 0.00 },
  { id: 2, name: 'Tomato', cost: 0.00 },
  { id: 3, name: 'Coffee', cost: 0.00 },
  { id: 4, name: 'Flowers', cost: 0.00 },
  { id: 5, name: 'Orange', cost: 0.00 },
  { id: 6, name: 'Pepper', cost: 0.00 },
  // { id: 7, name: 'Lettuce', cost: 2.99 },
  // { id: 8, name: 'Papaya', cost: 5.99 },
  // { id: 9, name: 'Durian', cost: 19.99 },
  // { id: 10, name: 'Kumquat', cost: 19.99 }
];

const getNewPrice = function(min, max) {
  return Math.random() * (max - min) + min;
};

const setNewPrices = function () {
  for (var i = 0; i < marketItems.length; i++) {
    marketItems[i].cost = getNewPrice(0.50, 4.99);
    // console.log('new fruit price is', marketItems[i]);
  }
};

// set initial prices
setNewPrices();

// set new prices every 10 seconds
setInterval(setNewPrices, 10000);
/**
 * Route serving market items
 * @function
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
router.get('/items', function (req, res) {
  console.log('marketRouter - get /items');
  res.send(marketItems);
});

router.put('/buy/:id', function (req, res) {
  console.log('marketRouter - put /buy');
  // TODO: Save to the database
  res.sendStatus(200); // <- Temporary
});

router.put('/sell/:id', function (req, res) {
  console.log('marketRouter - put /sell');
  // TODO: Save to the database
  res.sendStatus(200); // <- Temporary
});

router.get('/leaderboard', function (req, res) {
  console.log('marketRouter - get /leaderboard');
  // TODO: Retrieve from the database
  res.send([]); // <- Temporary
});

module.exports = router;
