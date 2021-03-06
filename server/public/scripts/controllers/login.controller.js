myApp.controller('LoginController', ['$http', '$location', 'UserService', function ($http, $location, UserService) {
  // console.log('LoginController created');
  var vm = this;
  vm.user = {
    username: '',
    password: ''
  };
  vm.message = '';

  vm.login = function () {
    // console.log('LoginController -- login');
    if (vm.user.username === '' || vm.user.password === '') {
      vm.message = "Please enter your username and password.";
    } else {
      // console.log('LoginController -- login -- sending to server...', vm.user);
      $http.post('/', vm.user).then(function (response) {
        if (response.data.username) {
          // console.log('LoginController -- login -- success: ', response.data);
          // location works with SPA (ng-route)
          $location.path('/marketplace'); // http://localhost:5000/#/market
        } else {
          // console.log('LoginController -- login -- failure: ', response);
          vm.message = "Incorrect username or password.";
        }
      }, function (response) {
        // console.log('LoginController -- registerUser -- failure: ', response);
        vm.message = "Incorrect username or password.";
      });
    }
  };

  vm.registerUser = function () {
    // console.log('LoginController -- registerUser');
    if (vm.user.username === '' || vm.user.password === '') {
      vm.message = "Please enter a username and password.";
    } else {
      // console.log('LoginController -- registerUser -- sending to server...', vm.user);
      $http.post('/register', vm.user).then(function (response) {
        // console.log('LoginController -- registerUser -- success');
        $location.path('/home');
      },
        function (response) {
          // console.log('LoginController -- registerUser -- error');
          vm.message = "Please try again."
        });
    }
  }
}]);
