# The Market Place

The Market is a place for people to exchange goods. The objective for the user is to buy low and sell high. A leaderboard page displays the ranking of users who are currently playing the game.

For this challenge, you will be working to create an experience that is 'game-like'. Specifically, you will be creating an interface for users to 'buy' from a list of items. The prices for each of the items will be displayed and as the user buys an item, money will be deducted from their account in exchange for one of those items. That item is kept in a player inventory. Additionally, every 10 seconds, the prices of those items will change. The player will also be allowed to 'sell' items from their inventory in exchange for the current price of the item.  This will give the player the ability to buy the items at one price, and then sell at another. (Buy Low, Sell High!)

When the application loads, you will need to have information for each of the commodities, specifically the **name** 
and the **market price** of each. This information will need to be displayed in a meaningful way on the DOM.

Available to the user is a **total cash** and an inventory display that shows how much of each of the item they have purchased. Also on the user display, should be an **average purchased price**, which shows, on average, how much money they have spent on a given item in their inventory.

Meaning that by clicking on the display for each of the items, allows the user to **buy** one of the items, at market price, which will be deducted from the total cash. The user is not allowed to spend more than they have.

The user will start with $100.

## Application Example
[Here is an example of an application with only the fruits: https://mighty-ravine-10405.herokuapp.com/](https://mighty-ravine-10405.herokuapp.com/)

## Items to be sold:

See the array in the `market.router.js` file. Items are returned by the `/market/items` route, this has already been done for you in the starter repo. 


## Technologies

- Mongo, Express, AngularJS, Node

## Setup

> Make sure mongo is running in an open tab (or with brew)

- `npm install`
- `npm start`

## Base Functionality

> Document your project and your code as you go!

- [x] Ability to register and log in
- [x] Display a list of available items to purchase on the Marketplace page
- [x] Ability to buy or sell items available for purchase
- [x] Server should randomly change product prices (within a 1 - 15 cent range) every 10 seconds for each product
- [x] Client will check for updates every 8 seconds
- [x] Correct error of item price going below $0.00.
- [x] Change price set to between .50 and 4.99.
- [x] Post score functionality.
- [x] Post score to database, write schema for scores in new document.
- [x] Write GET call for high score.
- [x] Create DOM display of high score.
- [x] Use updateOne syntax to update high score instead of save().
- [x] POST newScore function runs whenever high score is broken (if statement under sell function).
- [x] Style item display.
- [x] Remove header color, format title.
- [x] Style high score display.
- [x] Add time limit to game.
- [ ] Add if statement if guest playing for postScore(). Add link to main page to play as guest.
- [ ] Add time stamp to high score postings.
- [ ] Host on Heroku

### Assumptions

- Each item has unlimited quantity
- Prices for items may not go below 50 cents and may not go above 4 dollars and 99 cents.
- User may not spend more money than they have
- Players ranked by cash on hand, no need to account for current supply of goods
- We're using polling so it's possible the client prices will be slightly behind the server, **always use the server price when completing a transaction**

## Stretch Goals

- [ ] Add a sell all inventory button
- [ ] Create leaderboard page that displays the top 10 high scores.
- [ ] Leaderboard is refreshed every 10 seconds automatically
- [ ] Leaderboard should take into account current inventory
- [ ] Market items should be moved from an array into the database
- [ ] Use Angular Material to layout and style your content
- [ ] Each market item should have a limited inventory

## Documentation

**TODO:** document your project here.
