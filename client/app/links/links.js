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
