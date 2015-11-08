angular.module('shortly.shorten', [])

  .controller('ShortenController', function($scope, $location, Links){
    // Your code here
    $scope.link = {};

    $scope.addLink = function(){
      Links.addLink($scope.link)
        .then(function(){
          $location.path('/links');
        });
    };
  });


// Solution Code

/*
angular.module('shortly.shorten', [])

  .controller('ShortenController', function($scope, $location, Links){
    // Your code here

    $scope.link = {};
    $scope.addLink = function(){
      // during AJAX request, i.e., data exchange, load the spinner
      $scope.loading = true;
      Links.addLink($scope.link)
        .then(function(){
          // during AJAX request, i.e., data exchange, load the spinner
          $scope.loading = false;
          $location.path('/');
        })
        // Error catching...
        .catch(function(error){
          console.log(error);
        });
    };
  });
*/
