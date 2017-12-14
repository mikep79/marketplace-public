myApp.factory('UserService', ['$http', '$location', function($http, $location){
  console.log('UserService Loaded');

  var userObject = {};
  var marketItems = {
    data: []
  };

  return {
    userObject : userObject,
    marketItems : marketItems,

    getMarket : function(){
      // console.log('marketItems function works')
      $http.get('/market/items').then(function(response) {
        // console.log('marketItems response', response);
        marketItems.data = response.data;
      });
    },    

    getuser : function(){
      console.log('UserService -- getuser');
      $http.get('/user').then(function(response) {
          if(response.data.username) {
              // user has a curret session on the server
              userObject.userName = response.data.username;
              userObject.money = response.data.money;
              userObject.basket = response.data.basket;
              console.log('UserService -- getuser -- User Data: ', userObject.userName);
          } else {
              console.log('UserService -- getuser -- failure');
              // user has no session, bounce them back to the login page
              $location.path("/home");
          }
      },function(response){
        console.log('UserService -- getuser -- failure: ', response);
        $location.path("/home");
      });
    },

    logout : function() {
      console.log('UserService -- logout');
      $http.get('/user/logout').then(function(response) {
        console.log('UserService -- logout -- logged out');
        $location.path("/home");
      });
    },
    startPrice : function(){
      console.log('startPrice');
    },

    postScore : function(score){
      // console.log('Service postScore func called with score: ', score);
      var newScore = {
        data: score
      };
      $http.post('/score', newScore).then(function(response) {
        console.log('Response from postScore call: ', response);
      });
    }

  };

}]);
