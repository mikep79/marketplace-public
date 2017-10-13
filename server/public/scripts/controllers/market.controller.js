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
  

  vm.buyFruit = function(){
    //do stuff here
  };

  vm.sellFruit = function(){
    //do stuff here
  };
  

}]);
