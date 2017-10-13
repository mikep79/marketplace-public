myApp.controller('MarketController', ['UserService' ,function(UserService) {
  console.log('MarketController created');
  var vm = this;
  vm.userService = UserService;
  vm.userObject = UserService.userObject;

  vm.startPrice = function(){
    UserService.startPrice();
    vm.priceObj = UserService.priceObj;
    console.log(vm.priceObj);
    
  };
  
}]);
