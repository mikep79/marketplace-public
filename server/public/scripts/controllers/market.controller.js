myApp.controller('MarketController', ['UserService', '$interval', function (UserService, $interval) {
  // console.log('MarketController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.marketItems = UserService.marketItems;
  vm.scoreObject = UserService.scoreObject;
  // current quantity
  vm.quantity = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  };
  // total purchased
  vm.total = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0
  }
  // total money spent
  vm.sum = {
    1: 0.00,
    2: 0.00,
    3: 0.00,
    4: 0.00,
    5: 0.00,
    6: 0.00,
  };
  // average cost
  vm.average = {
    1: 0.00,
    2: 0.00,
    3: 0.00,
    4: 0.00,
    5: 0.00,
    6: 0.00,
  };

  // get new prices every 8 seconds
  vm.getMarketItems = function () {
    UserService.getMarket();
    // console.log('controller market items: ', vm.marketItems);
  };

  $interval(vm.getMarketItems, 8000);


  vm.buyFruit = function (itemCost, id) {
    // stop buy if not enough money
    if (itemCost > vm.userObject.money) {
      return;
    } else {
      //deduct money from wallet
      vm.userObject.money = vm.userObject.money - itemCost;
      // increment quantity and total of given fruit
      vm.quantity[id]++;
      vm.total[id]++;
      // add to sum for item, update average
      vm.sum[id] += itemCost;
      vm.average[id] = vm.sum[id] / vm.total[id];
    }
  };

  vm.sellFruit = function (itemCost, id) {
    // stop sell if fruit count is 0
    if (vm.quantity[id] == 0) {
      return;
    } else {
      vm.userObject.money = vm.userObject.money + itemCost;
      // decrement quantity of given fruit
      vm.quantity[id]--;
    }
    if (vm.userObject.money > vm.scoreObject.data[0].score){
      vm.postScore(vm.userObject.money);
    }
  };

  vm.postScore = function(score){
    console.log('Score: ', score);
    UserService.postScore(score);
    vm.showScore();
  };

  vm.showScore = function(){
    // console.log('ShowScore func called');
    UserService.getScore();
  };

  // call on page load
  vm.showScore();

}]);
