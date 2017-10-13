myApp.controller('MarketController', ['UserService' ,function(UserService) {
  console.log('MarketController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;
  vm.marketItems = UserService.marketItems;


  vm.getMarketItems = function(){
    UserService.getMarket();
    // vm.marketItems = UserService.marketItems;
    console.log('controller', vm.marketItems);
  };
  
  vm.buyFruit = function(){
    //do stuff here
  };

  vm.sellFruit = function(){
    //do stuff here
  };
  

}]);
