angular.module('shortly.links', [])

  .controller('LinksController', function($scope, Links){
    // Your code here
    $scope.data = {};
    $scope.getLinks = function(){
      // grab all links - maybe a call to a factory? (where links are
      // stored)
      Links.getLinks()
        // use a promise to return link data
        .then(function(result){
          $scope.data.links = result;
        });
    };
    $scope.getLinks();
  });


// Solution Code
/*
angular.module('shortly.links', [])

  .controller('LinksController', function($scope, Links){
    // Your code here

    $scope.data = {};
    $scope.getLinks = function(){
      Links.getAll()
        .then(function(links){
          $scope.data.links = links;
        })
        // Added error logger/catcher
        .catch(function(error){
          console.error(error);
        });
    };
    $scope.getLinks();
  });
*/
