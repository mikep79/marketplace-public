myApp.controller('MarketController', ['UserService','$interval' ,function(UserService,$interval) {
  console.log('MarketController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.marketItems = UserService.marketItems;
  

  vm.getMarketItems = function(){
    UserService.getMarket();
    // vm.marketItems = UserService.marketItems;
    // console.log('controller', vm.marketItems);
  };
  
  $interval(vm.getMarketItems,8000);
  

  vm.buyFruit = function(itemCost){
    // console.log('Item cost: ', itemCost);
    vm.userObject.money = vm.userObject.money - itemCost;
  };

  vm.sellFruit = function(itemCost){
    // console.log('Item cost: ', itemCost);
    vm.userObject.money = vm.userObject.money + itemCost;
  };
  

}]);
